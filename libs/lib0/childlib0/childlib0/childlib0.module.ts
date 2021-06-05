import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib0parentComponent } from './lib0childlib0parent.component';
import { Lib0childlib0component0ComponentModule } from '@largerepo/lib0/childlib0/lib0childlib0component0/lib0childlib0component0';
export { Lib0childlib0parentComponent } from './lib0childlib0parent.component';

@NgModule({
  imports: [CommonModule, Lib0childlib0component0ComponentModule],
  declarations: [
    Lib0childlib0parentComponent
  ],
  exports: [Lib0childlib0parentComponent]
})
export class Childlib0Module {}
