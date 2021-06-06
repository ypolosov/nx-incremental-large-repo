import { Logger, LOGGER_CONFIG_TOKEN } from '@largerepo/baseline/agnostic/logger/model';
import { Provider } from '@largerepo/baseline/agnostic/ioc/model';

import { DefaultLogger } from './impl';

export const tokenProvider = {
  provide: LOGGER_CONFIG_TOKEN,
  useValue: {
    instanceName: DefaultLogger.DEFAULT_INSTANCE_NAME,
    isDisabled: false,
    isForced: false,
  },
};

export const provider = {
  provide: Logger,
  useClass: DefaultLogger,
};

export const providers: Array<Provider> = [provider, tokenProvider];
