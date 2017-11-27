import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Board } from './stores';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'my-app',
  template: `
    <div *mobxAutorun >
        <svg width="550" height="550"
        (mousedown)="board.mouseDown($event)"
        (mousemove)="board.mouseMove($event)"
        (mouseup)="board.mouseUp($event)"
        >
        <svg:g
          box
          *ngFor="let box of board.boxes"
          [box]="box"
          [selected]="box.id == board.currentId"
          ></svg:g>
      </svg>
    </div>
    {{ counter() }}
  `
})
export class AppComponent implements AfterViewInit {

  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  constructor(
    public board: Board,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detach();
  }

  counter () {
    console.count('board');
  }

}
