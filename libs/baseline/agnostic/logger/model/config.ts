import { InjectionToken } from '@largerepo/baseline/agnostic/ioc/model';

export interface LoggerConfig {
  instanceName: string;
  isDisabled: boolean; // in DEV mode if true it disables logging
  isForced: boolean; // in PROD mode if true it enables logging
}

export const LOGGER_CONFIG_TOKEN = new InjectionToken<LoggerConfig>('LOGGER_CONFIG_TOKEN');
