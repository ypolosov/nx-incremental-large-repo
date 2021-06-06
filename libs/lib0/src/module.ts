import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Childlib0Module } from '@largerepo/lib0/childlib0/src';
import { Lib0parentComponent } from './impl';
export { Lib0parentComponent } from './impl';

@NgModule({
  imports: [
    CommonModule,
    Childlib0Module,
  ],
  declarations: [Lib0parentComponent],
  exports: [Lib0parentComponent]
})
export class Lib0Module {}
