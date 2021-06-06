import { Component, OnInit } from '@angular/core';
import { Logger, LoggerTypes } from '@largerepo/baseline/agnostic/logger/model';

@Component({
  selector: 'largerepo-lib0childlib0component0',
  templateUrl: './impl.html',
  styleUrls: ['./impl.css'],
})
export class Lib0childlib0component0Component implements OnInit {

  constructor (private logger: Logger) {
  }

  ngOnInit(){
    return this.logger.info('Logger works!!', LoggerTypes.LOG);
  }
}
