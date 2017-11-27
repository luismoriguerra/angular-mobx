import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export class Box {
  @observable id = 0;
  @observable x = 0;
  @observable y = 0;
  @observable selected = false;

  constructor ( { id, x, y}) {
    this.id = id;
    this.x = x ;
    this.y = y;
  }

}

@Injectable()
export class Board {
  @observable boxes = [];
  @observable offsetX = 0;
  @observable offsetY = 0;
  @observable currentId = null;

  constructor() {
    for (let i=0; i < 1000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {
        id,
        x,
        y
      };
      this.boxes.push(new Box(box));
    }
  }

  @action mouseDown(event) {
    const id = Number(event.target.getAttribute("dataId"));
    const box = this.boxes[id];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = id;
  }

  @action mouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(this.currentId, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  @action mouseUp($event) {
    this.currentId = null;
  }

  @action updateBox(id, x, y) {
    this.boxes[id] = { id, x, y };
  }
}
