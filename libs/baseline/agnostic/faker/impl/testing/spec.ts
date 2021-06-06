// TODO: refactor tests to not use upper level
// import { spClientResultFakeFactory } from '@largerepo/shared/services/sp/endpoint/fake';
// import { langStateFakeFactory } from '@largerepo/shared/common-store/lang/reducer/fake';
// import { localesFakeFactory } from '@largerepo/shared/common-store/lang/fake';
import { Logger } from '@largerepo/baseline/agnostic/logger/model';
import { IoCReflectiveInjector } from '@largerepo/baseline/agnostic/ioc/model';

// import { Faker } from '@largerepo/baseline/agnostic/faker/model';
// import * as tamarTemplateBrandModel from '@largerepo/baseline/agnostic/content/tamar-template/brand/model';
// import * as tamarTemplateBrand from '@largerepo/baseline/agnostic/content/tamar-template/brand';
// import * as commonTemplateTagModel from '@largerepo/baseline/agnostic/content/common-template/tag/model';
// import * as commonTemplateTag from '@largerepo/baseline/agnostic/content/common-template/tag';
// import * as commonTemplateBrandModel from '@largerepo/baseline/agnostic/content/common-template/brand/model';
// import * as commonTemplateBrand from '@largerepo/baseline/agnostic/content/common-template/brand';
// import * as cmsSluggerTesting from '@largerepo/baseline/agnostic/cms-slugger/testing';
// import { CmsSlugger } from '@largerepo/baseline/agnostic/cms-slugger/model';
// import * as cmsModelRunnerTesting from '@largerepo/baseline/agnostic/cms-model-runner/testing';
// import { CmsModelRunner } from '@largerepo/baseline/agnostic/cms-model-runner/model';
// import { CmsModelHandler } from '@largerepo/baseline/agnostic/cms-model-handler/model';
// import * as cmsCreatorTesting from '@largerepo/baseline/agnostic/cms-creator/testing';
// import { CmsCreator } from '@largerepo/baseline/agnostic/cms-creator/model';

// import { testingProviders } from './testing';

describe('@largerepo/baseline/agnostic/faker', () => {
  let injector: IoCReflectiveInjector;
  let logger: Logger;
  // let cmsModelRunner: CmsModelRunner;
  // let cmsSlugger: CmsSlugger;

  // beforeEach(() => {
  //   injector = IoCReflectiveInjector.resolveAndCreate([
  //     ...testingProviders,
  //     ...cmsModelRunnerTesting.testingProviders,
  //     ...cmsCreatorTesting.testingProviders,
  //     ...cmsSluggerTesting.testingProviders,
  //     { provide: CmsModelHandler, useExisting: CmsCreator },
  //   ]);

  //   logger = injector.get(Logger);
  //   cmsModelRunner = injector.get(CmsModelRunner);
  //   cmsSlugger = injector.get(CmsSlugger);
  // });

  // it('should be common template Tag', async () => {
  //   const model = await Faker.makeCmsFactory(commonTemplateTag.DefaultTag).build();
  //   expect(model instanceof commonTemplateTagModel.Tag).toBeTruthy();
  // });

  // it('should be a tamar template Brand', async () => {
  //   const model = await Faker.makeCmsFactory(tamarTemplateBrand.DefaultBrand).build();
  //   // logger.info(JSON.stringify(model, null, '  '));
  //   expect(model instanceof tamarTemplateBrandModel.Brand).toBeTruthy();
  // });

  // it('should be common template Brand', async () => {
  //   const model = await Faker.makeCmsFactory(commonTemplateBrand.DefaultBrand).build();
  //   expect(model instanceof commonTemplateBrandModel.Brand).toBeTruthy();
  // });
});
