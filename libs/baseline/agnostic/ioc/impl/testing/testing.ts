import { Provider } from '@largerepo/baseline/agnostic/ioc/model';
import { providers } from '@largerepo/baseline/agnostic/ioc/impl/src';
import { baseTestingProviders } from '@largerepo/baseline/agnostic/impl/testing';

export const testingProviders: Array<Provider> = [...providers, ...baseTestingProviders];
