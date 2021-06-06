import * as logger from '@largerepo/baseline/agnostic/logger/impl/src';
import { Provider } from '@largerepo/baseline/agnostic/ioc/model';

export const baseProviders: Array<Provider> = [...logger.providers];
