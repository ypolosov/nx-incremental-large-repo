import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IoCReflectiveInjector } from '@largerepo/baseline/agnostic/ioc/model';
import { Logger } from '@largerepo/baseline/agnostic/logger/model';
import * as logger from '@largerepo/baseline/agnostic/logger/impl/src';
import { Lib0childlib0component0Component } from './impl';
export { Lib0childlib0component0Component } from './impl';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Lib0childlib0component0Component,
  ],
  providers: [
    {
      provide: Logger,
      useFactory: () => IoCReflectiveInjector.resolveAndCreate(logger.providers).get(Logger),
    },
  ],
  exports: [Lib0childlib0component0Component]
})
export class Lib0childlib0component0ComponentModule {}
