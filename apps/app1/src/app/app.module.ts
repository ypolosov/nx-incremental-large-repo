import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Lib0Module } from '@largerepo/lib0/lib0';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Lib0Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
