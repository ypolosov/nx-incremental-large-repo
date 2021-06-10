const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
[ ]);

module.exports = {
  output: {
    uniqueName: "app0",
    publicPath: "auto"
    },
  optimization: {
    runtimeChunk: false
    },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
        }
    },
  plugins: [
    new ModuleFederationPlugin({
            // For remotes (please adjust)
            // name: "shell",
            // filename: "remoteEntry.js",
            // exposes: {
            //     './Component': './projects/shell/src/app/app.component.ts',
            // },        
            // For hosts (please adjust)
            // remotes: {
            //     "mfe1": "mfe1@http://localhost:4200/remoteEntry.js",
            // },

        shared: {
                "@angular/core": { singleton: true, strictVersion: true
                },
                "@angular/common": { singleton: true, strictVersion: true
                },
                "@angular/common/http": { singleton: true, strictVersion: true
                },
                "@angular/router": { singleton: true, strictVersion: true
                },
                "tslib": { singleton: true, strictVersion: true
                },
                "injection-js": { singleton: true
                },
                "@largerepo/lib0/impl/src":{
                  import: "libs/lib0/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/lib0/model":{
                  import: "libs/lib0/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/lib0/childlib0/impl/src":{
                  import: "libs/lib0/childlib0/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/lib0/childlib0/model":{
                  import: "libs/lib0/childlib0/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/lib0/childlib0/lib0childlib0component0/impl/src":{
                  import: "libs/lib0/childlib0/lib0childlib0component0/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/lib0/childlib0/lib0childlib0component0/model":{
                  import: "libs/lib0/childlib0/lib0childlib0component0/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/impl/src":{
                  import: "libs/baseline/agnostic/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/model":{
                  import: "libs/baseline/agnostic/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/logger/impl/src":{
                  import: "libs/baseline/agnostic/logger/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/logger/model":{
                  import: "libs/baseline/agnostic/logger/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/ioc/impl/src":{
                  import: "libs/baseline/agnostic/ioc/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/ioc/model":{
                  import: "libs/baseline/agnostic/ioc/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/constants/impl/src":{
                  import: "libs/baseline/agnostic/constants/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/constants/model":{
                  import: "libs/baseline/agnostic/constants/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/faker/impl/src":{
                  import: "libs/baseline/agnostic/faker/impl/src",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
                "@largerepo/baseline/agnostic/faker/model":{
                  import: "libs/baseline/agnostic/faker/model",
                  version: '1.0.0',
                  requiredVersion: '^1.0.0'
                },
          ...sharedMappings.getDescriptors()
            }
        }),
    sharedMappings.getPlugin()
    ],
};
