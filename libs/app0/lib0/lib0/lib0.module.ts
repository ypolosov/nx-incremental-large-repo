import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Childlib0Module } from '@largerepo/app0/lib0/childlib0';
import { Lib0parentComponent } from './lib0parent/lib0parent.component';
export { Lib0parentComponent } from './lib0parent/lib0parent.component';

@NgModule({
  imports: [
    CommonModule,
    Childlib0Module,
  ],
  declarations: [Lib0parentComponent],
  exports: [Lib0parentComponent]
})
export class Lib0Module {}
