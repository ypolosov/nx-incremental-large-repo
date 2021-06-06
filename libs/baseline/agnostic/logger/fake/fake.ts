import { LoggerConfig } from '@largerepo/baseline/agnostic/logger/model';
import { Faker } from '@largerepo/baseline/agnostic/faker/model';

export const defaultLoggerConfigFakeFactory = (initValue?: Partial<LoggerConfig>) => {
  return Faker.makeFactory<LoggerConfig>(
    {
      instanceName: 'DefaultFakeLogger',
      isDisabled: false,
      isForced: false,
    },
    initValue
  );
};
