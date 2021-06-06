import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib0component0ComponentModule } from '@largerepo/lib0/childlib0/lib0childlib0component0/src';
import { Lib0childlib0parentComponent } from './impl';
export { Lib0childlib0parentComponent } from './impl';

@NgModule({
  imports: [CommonModule, Lib0childlib0component0ComponentModule],
  declarations: [
    Lib0childlib0parentComponent
  ],
  exports: [Lib0childlib0parentComponent]
})
export class Childlib0Module {}
