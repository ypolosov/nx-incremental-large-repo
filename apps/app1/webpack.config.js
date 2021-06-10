const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
[ 
//   "@largerepo/lib0/impl/src", 
// "@largerepo/lib0/childlib0/impl/src", 
// "@largerepo/lib0/childlib0/lib0childlib0component0/impl/src"
]);

module.exports = {
  output: {
    uniqueName: "app1",
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
                // "@angular/core": { singleton: true, strictVersion: true
                // },
                // "@angular/common": { singleton: true, strictVersion: true
                // },
                // "@angular/common/http": { singleton: true, strictVersion: true
                // },
                // "@angular/router": { singleton: true, strictVersion: true
                // },
          ...sharedMappings.getDescriptors()
            }
        }),
    sharedMappings.getPlugin()
    ],
};
