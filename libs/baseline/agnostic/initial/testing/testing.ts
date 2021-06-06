import { Provider } from '@largerepo/baseline/agnostic/ioc/model';
import { baseTestingProviders } from '@largerepo/baseline/agnostic/impl/testing';

export const initialTestingProviders: Array<Provider> = [...baseTestingProviders];
