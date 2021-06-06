import 'reflect-metadata';

import {
  ClassProvider as InjectionJsClassProvider,
  ExistingProvider as InjectionJsExistingProvider,
  FactoryProvider as InjectionJsFactoryProvider,
  InjectionToken,
  Injector,
  ReflectiveInjector,
  ValueProvider as InjectionJsValueProvider,
} from 'injection-js';

export { Inject, Injector, InjectionToken } from 'injection-js';

export function FixBuildOptimizer(target: Function): void {
  // Should be placed on baseline impls,
  // due to angular optimization and build optimization
  // drop constructor of impls (through made it anonim class "class extends") in
}

export type Type<T> = Function & { prototype: T };
export interface NotAbstractClassType<T = object> extends Function {
  new (...args: any[]): T;
}

export abstract class IoCReflectiveInjector extends ReflectiveInjector {
  // TODO: Implement typings here after Typescript 4.2 in our project
  // We need abstract constructor signatures for that
  // https://devblogs.microsoft.com/typescript/announcing-typescript-4-2-beta/#abstract-construct-signatures
  //  abstract new () => T
  abstract get<T>(token: Type<T>, notFoundValue?: any): T;
  abstract get<T>(token: InjectionToken<T>, notFoundValue?: any): T;

  static resolveAndCreate(providers: Provider[], parent?: Injector): IoCReflectiveInjector {
    return ReflectiveInjector.resolveAndCreate(providers, parent);
  }

  static instantiateTransient<T>(
    parentInjector: IoCReflectiveInjector,
    targetProvider: ClassProvider<T>,
    depsProviders?: Array<Provider>
  ) {
    const tempInjector = parentInjector.resolveAndCreateChild([...depsProviders]);
    const resolvedTargetProvider = IoCReflectiveInjector.resolve([targetProvider])[0];
    const instance: T = tempInjector.instantiateResolved(resolvedTargetProvider);
    return instance;
  }
}

export type Provider<T = any> =
  | ValueProvider<T>
  | ClassProvider<T>
  | ExistingProviderForClass<T>
  | ExistingProviderForToken<T>
  | FactoryProviderForClass<T>
  | FactoryProviderForToken<T>
  | ExistingInstanceClassProvider<T>;

export interface ClassProvider<T> extends InjectionJsClassProvider {
  provide: Type<T>;
  useClass: NotAbstractClassType<T>;
}

export interface ValueProvider<T> extends InjectionJsValueProvider {
  provide: InjectionToken<T>;
  useValue: T;
}

export interface ExistingInstanceClassProvider<T> extends InjectionJsValueProvider {
  provide: Type<T>;
  useValue: T;
}

export interface ExistingProviderForClass<T> extends InjectionJsExistingProvider {
  provide: Type<T>;
  useExisting: Type<T>;
}

export interface ExistingProviderForToken<T> extends InjectionJsExistingProvider {
  provide: InjectionToken<T>;
  useExisting: InjectionToken<T>;
}

export interface FactoryProviderForClass<T> extends InjectionJsFactoryProvider {
  provide: Type<T>;
  useFactory: {
    (...args: any[]): T;
  };
}

export interface FactoryProviderForToken<T> extends InjectionJsFactoryProvider {
  provide: InjectionToken<T>;
  useFactory: {
    (...args: any[]): T;
  };
}
