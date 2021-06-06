import { Logger, LOGGER_CONFIG_TOKEN, LoggerConfig, LoggerTypes } from '@largerepo/baseline/agnostic/logger/model';
import { FixBuildOptimizer, Inject } from '@largerepo/baseline/agnostic/ioc/model';

@FixBuildOptimizer
export class DefaultLogger extends Logger {
  private static getPrefix(instanceName: string, isForced: boolean): string {
    if (!instanceName) {
      return '';
    }

    return isForced ? `(forced) ${instanceName}: ` : `${instanceName}: `;
  }

  private static isEnabled(loggerConfig: LoggerConfig): boolean {
    let isEnabled = false;
    if (DefaultLogger.IS_PRODUCTION) {
      isEnabled = loggerConfig.isForced;
    } else {
      isEnabled = !loggerConfig.isDisabled;
    }

    return isEnabled;
  }

  private noop = (): any => undefined;

  constructor(@Inject(LOGGER_CONFIG_TOKEN) private readonly loggerConfig: LoggerConfig) {
    super();
  }

  force(consoleArg: string | Error, type: LoggerTypes = LoggerTypes.LOG) {
    return console[type].bind(console, DefaultLogger.getPrefix(this.loggerConfig.instanceName, true))(consoleArg);
  }

  get info() {
    if (DefaultLogger.isEnabled(this.loggerConfig)) {
      const prefix = DefaultLogger.getPrefix(this.loggerConfig.instanceName, this.loggerConfig.isForced) || '';
      if (prefix.length) {
        return console.log.bind(console, prefix);
      } else {
        return console.log.bind(console);
      }
    } else {
      return this.noop;
    }
  }

  get warn() {
    if (DefaultLogger.isEnabled(this.loggerConfig)) {
      return console.warn.bind(
        console,
        DefaultLogger.getPrefix(this.loggerConfig.instanceName, this.loggerConfig.isForced)
      );
    } else {
      return this.noop;
    }
  }

  get error() {
    if (DefaultLogger.isEnabled(this.loggerConfig)) {
      return console.error.bind(
        console,
        DefaultLogger.getPrefix(this.loggerConfig.instanceName, this.loggerConfig.isForced)
      );
    } else {
      return this.noop;
    }
  }
}
