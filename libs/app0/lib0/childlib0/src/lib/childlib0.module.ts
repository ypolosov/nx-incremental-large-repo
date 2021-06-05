import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib0component0Component } from './lib0childlib0component0/lib0childlib0component0.component';
import { Lib0childlib0parentComponent } from './lib0childlib0parent/lib0childlib0parent.component';
export { Lib0childlib0parentComponent } from './lib0childlib0parent/lib0childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib0childlib0component0Component,
    Lib0childlib0parentComponent
  ],
  exports: [Lib0childlib0parentComponent]
})
export class Childlib0Module {}
