# Plug'n'Play

 [Getting rid of node_modules](https://github.com/yarnpkg/rfcs/pull/101)

 **一定要记的升级Yarn至2.0版本以上**

## 目的: 解决引用依赖及安装依赖速度慢的问题.

目前的引用依赖查找流程: 内置包(fs, path) -> 相对文件 -> node_modules -> 系统目录. 这样的引用缺点: I/O 效率太差.

目前的安装依赖流程: 解析版本号区间的最新依赖包 -> 检查运行环境 -> 整合依赖信息 -> 获取依赖包到缓存中 -> 复制依赖到 node_modules. 
> install流程可参考: https://juejin.cn/post/6917105300084359182

PnP是通过映射表来维护依赖树中的包及版本. 这个映射表在对应的项目目录中, 命名为:`.pnp.js`.

对于PnP特性来说
- 安装依赖并不会拷贝到node_modules目录中, 而是会在`.pnp.js`文件中记录依赖缓存的路径. 这样就避免了大量的`I/O`操作. 
- 引用依赖时 `.pnp.js` 还包含了一个特殊的 `resolver`，Yarn会利用这个特殊的resolver来处理 require()请求，该 resolver 会根据 .pnp.js文件中包含的静态映射表直接确定依赖在文件系统中的具体位置，从而避免了现有实现在处理依赖引用时的 I/O 操作。也会根据`.pnp.js`中的目录路径进行引用.


## 总结

- 安装及引用速度提升
- CI环境中多个CI实例共享同一份缓存
- 减少磁盘占有率

> 

## 开启PnP

- `yarn --pnp`
- `package.json`配置` "installConfig": { "pnp": true}`

## 注意

`PnP` 目前只是针对`Yarn1.12+`

开启了`PnP`时, 不再有`node_modules`目录, 无论执行`scripts`还是用`node`执行文件, 都必须用 `Yarn`.

### 在项目中调试依赖

开发过程中我们有时会直接修改 node_modules 目录下的依赖来调试。但在 PnP 模式下，由于依赖都指向了全局缓存，我们不再可以直接修改这些依赖。

针对这种场景，Yarn提供了 yarn unplug packageName 来将某个指定依赖拷贝到项目中的 .pnp/unplugged目录下。之后 .pnp.js中的 resolver就会自动加载这个 unplug 的版本。

调试完毕后，再执行yarn unplug --clear packageName 可移除本地.pnp/unplugged 中的对应依赖。


### 相关Plugin

[`pnp-webpack-plugin`](https://github.com/arcanis/pnp-webpack-plugin)

