import { LoggerTypes } from './types';

// Affected point trigger: X!
export abstract class Logger {
  static IS_PRODUCTION = false;
  static DEFAULT_INSTANCE_NAME = 'DEFAULT';

  abstract force(consoleArg: string | Error, type?: LoggerTypes);

  abstract get info(): (...message: any[]) => void;

  abstract get warn(): (...message: any[]) => void;

  abstract get error(): (...message: Array<any | Error>) => void;
}
