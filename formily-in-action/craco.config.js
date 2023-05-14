// * 配置完成后记得重启下
const CracoLessPlugin = require("craco-less");
<<<<<<< HEAD:formly-in-action/craco.config.js
=======
const path = require('path')
const pathResolve = (pathUrl)=>path.join(__dirname,pathUrl)
>>>>>>> c684ff4a5a3f5c3b1487448dac0db29212bb0c2e:formily-in-action/craco.config.js

module.exports = {
  babel: {
    //用来支持装饰器
<<<<<<< HEAD:formly-in-action/craco.config.js
    plugins: [["@babel/plugin-proposal-decorators", {legacy: true}]]
=======
    plugins: [["@babel/plugin-proposal-decorators", {legacy: true}]],
  },
  webpack:{
    alias:{
        '@': pathResolve("src")
      }
>>>>>>> c684ff4a5a3f5c3b1487448dac0db29212bb0c2e:formily-in-action/craco.config.js
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "red",
              "@border-color-base": "green",
              "@link-color": "orange"
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
