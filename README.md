# front-end-engineering

## Mini-Rollup

操纵代码
AST语法树
如何完成简化版的Treeshaking

## 手写Webpack

webpack

## vite

使用ES module

npm init -y
npm i koa -s

# CLI

主要技能

* 定制命令行界面
* 执行终端命令
* 动态生成代码

使用vue的全家桶开发的时候每次添加视图都需要配置视图

希望约定优于定义的方式自动路由配置

```cmd
mkdir vue-auto-router-cli
pnpm init
```

安装库

```shell
pnpm install commander
```

如果是在windows上需要修改默认js引擎

* 执行以下操作，它更改了Windows注册表中.js扩展的关联(仅对 Current 用户帐户生效，但相反，不需要海拔):

```
New-Item -Force HKCU:\SOFTWARE\Classes\NodeJSFile\shell\Open\Command -Value "`"$((Get-Command node.exe).Source)`" `"%1`" %*"
New-Item -Force HKCU:\SOFTWARE\Classes\.js -Value 'NodeJSFile'
```

从那时起，调用*.js文件将直接使用node.js(node.exe)执行它们.

请注意，您必须在要以这种方式行为的每台机器上执行此操作.



# Redux
