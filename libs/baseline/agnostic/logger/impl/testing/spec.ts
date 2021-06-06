import { Logger, LOGGER_CONFIG_TOKEN } from '@largerepo/baseline/agnostic/logger/model';
import { defaultLoggerConfigFakeFactory } from '@largerepo/baseline/agnostic/logger/fake';
import { IoCReflectiveInjector } from '@largerepo/baseline/agnostic/ioc/model';

import { testingProviders } from './testing';

describe('@largerepo/baseline/agnostic/logger/default', () => {
  let injector: IoCReflectiveInjector;
  let service: Logger;
  const isProd = false;

  beforeAll(() => {
    injector = IoCReflectiveInjector.resolveAndCreate([
      ...testingProviders,
      { provide: LOGGER_CONFIG_TOKEN, useValue: defaultLoggerConfigFakeFactory().build() },
    ]);
    service = injector.get(Logger);
    Logger.IS_PRODUCTION = isProd;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call log func depends on isDisabled config prop', () => {
    const spyConsoleLog = jest.spyOn(console, 'log');
    service.info('test call');
    expect(spyConsoleLog).toHaveBeenCalled();
  });
});
