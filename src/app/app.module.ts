import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoxComponent } from './box.component';
import { MobxAngularModule } from 'mobx-angular';
import { Board } from './stores';
@NgModule({
  declarations: [
    AppComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MobxAngularModule
  ],
  providers: [
    Board
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
