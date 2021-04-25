# webpack 5 新特性

版本 5 中重点在以下几点:

- 尽量使用持久化缓存提高性能
- 更好的算法和默认值该井长期缓存
- 更好的 Tree Shaking 和 代码生成 来优化Bundler

## 代码清除

1. 清除了V4所有的被遗弃代码, 如果要升级 5, 首先要确定现在的webpack 4 运行起来没有 `deprecation warning`
2. 废弃了`require.include`,该方法是Webpack的针对**所有模块的公共方法**, 基本用不到的方法
3. 改变了IgnorePlugin, 我们经常会用到logger等日志, 但是日志在production中是不需要打包的, 所以我们可以用该插件忽略日志打包.
4. 移除了Node的Polyfill, 尽量使用前端兼容的模块

## 长期缓存

1. 新增**长期缓存算法**, **只在production模式下自动启用**.
   1. chunkIds: 'deterministic',
   2. moduleIds: 'deterministic',
   3. mangleExports: 'deterministic',