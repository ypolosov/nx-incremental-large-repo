/// <reference types="faker" />
import * as faker from 'faker/locale/en';
import * as factoryTs from 'factory.ts';

// import { Ctor } from '@largerepo/baseline/agnostic/primitives/model';
// import { IoCReflectiveInjector } from '@largerepo/baseline/agnostic/ioc/model';
// import { Tag } from '@largerepo/baseline/agnostic/content/common-template/tag/model';
// import { Picture } from '@largerepo/baseline/agnostic/content/common-template/picture/model';
// import { ExternalData } from '@largerepo/baseline/agnostic/content/common-template/external-data/model';
// import { ContentSection } from '@largerepo/baseline/agnostic/content/common-template/content-section/model';
// import { Asset } from '@largerepo/baseline/agnostic/content/common-template/asset/model';
// import { BrandSpecifics } from '@largerepo/baseline/agnostic/cms/model';
// import { CmsModelRunner } from '@largerepo/baseline/agnostic/cms-model-runner/model';
// import * as cmsModelRunner from '@largerepo/baseline/agnostic/cms-model-runner';
// import { CmsModelRevealer } from '@largerepo/baseline/agnostic/cms-model-revealer/model';
// import * as cmsModelRevealer from '@largerepo/baseline/agnostic/cms-model-revealer';
// import { CmsModelHandler, CmsModelHandlerPayload } from '@largerepo/baseline/agnostic/cms-model-handler/model';
// import { BaseVM } from '@largerepo/baseline/agnostic/cms-model-former/model';
// import { CmsCreator } from '@largerepo/baseline/agnostic/cms-creator/model';
// import * as cmsCreator from '@largerepo/baseline/agnostic/cms-creator';

// more info:
// https://github.com/willryan/factory.ts
// https://github.com/marak/Faker.js

// override 'word' method to return always only first word e.g. 'lorem' instead of 'lorem ipsum'
faker.random.word = ((fn) => (type?: string) => fn(type).split(' ')[0])(faker.random.word);

export abstract class Faker {
  // private static BRAND_OWNER = BrandSpecifics.COMMON;
  // private static cmsModelCreatorRunnerInstance = Faker.initCmsModelCreatorRunner();
  // private static cmsModelRevealerInstance = Faker.initCmsModelRevealer();

  static address = faker.address;
  static commerce = faker.commerce;
  static company = faker.company;
  static database = faker.database;
  static date = faker.date;
  static finance = faker.finance;
  static hacker = faker.hacker;
  static image = faker.image;
  static internet = faker.internet;
  static locale = faker.locale;
  static lorem = faker.lorem;
  static names = faker.name;
  static phone = faker.phone;
  static random = faker.random;
  static system = faker.system;

  // private static initCmsModelCreatorRunner() {
  //   const injector = IoCReflectiveInjector.resolveAndCreate([
  //     ...cmsModelRunner.providers,
  //     ...cmsCreator.providers,
  //     {
  //       provide: CmsModelHandler,
  //       useExisting: CmsCreator,
  //     },
  //   ]);

  //   const cmsModelCreatorRunnerInstance = injector.get(CmsModelRunner);
  //   return cmsModelCreatorRunnerInstance as CmsModelRunner;
  // }

  // private static initCmsModelRevealer() {
  //   const injector = IoCReflectiveInjector.resolveAndCreate([...cmsModelRevealer.providers]);

  //   const cmsModelRevealerInstance = injector.get(CmsModelRevealer);
  //   return cmsModelRevealerInstance as CmsModelRevealer;
  // }

  // factory.ts
  static makeFactory = <T>(defaultValue: T, initValue: Partial<T>) => {
    return factoryTs.makeFactory<T>({ ...defaultValue, ...initValue });
  };

  static val<T>(defaultValue: T) {
    return {
      build: (value?: T): T => {
        if (value) {
          return factoryTs.val<T>(value).build(0);
        } else {
          return factoryTs.val<T>(defaultValue).build(0);
        }
      },
    };
  }

  // static makeCmsFactory<T extends Number | String | Boolean | Asset | Tag | Picture | ExternalData | ContentSection>(
  //   ctor: Ctor<T>,
  //   owner: string = Faker.BRAND_OWNER,
  //   depthLevel?: number,
  //   handlerPayload?: Array<CmsModelHandlerPayload<any>> | CmsModelHandlerPayload<any>
  // ) {
  //   return {
  //     build: (overrideHandlerPayload?: Partial<Array<CmsModelHandlerPayload<any>> | CmsModelHandlerPayload<any>>) => {
  //       let mergedHandlerPayload;
  //       if (handlerPayload && overrideHandlerPayload) {
  //         if (Array.isArray(handlerPayload) && Array.isArray(overrideHandlerPayload)) {
  //           //TODO: check how should we merge array's items in this case
  //           mergedHandlerPayload = [...handlerPayload, ...overrideHandlerPayload];
  //         } else {
  //           mergedHandlerPayload = { ...handlerPayload, ...overrideHandlerPayload };
  //         }
  //       } else if (handlerPayload) {
  //         mergedHandlerPayload = handlerPayload;
  //       } else if (overrideHandlerPayload) {
  //         mergedHandlerPayload = overrideHandlerPayload;
  //       }
  //       return Faker.cmsModelCreatorRunnerInstance.run<T>(ctor, owner, depthLevel, mergedHandlerPayload);
  //     },
  //   };
  // }

  // static makeModelInfoFactory<T extends BaseVM>(brandSpecific = BrandSpecifics.COMMON, ...args: Array<BaseVM>) {
  //   return { build: () => Faker.cmsModelRevealerInstance.buildModelInfo<T>(brandSpecific, ...args) };
  // }
}
