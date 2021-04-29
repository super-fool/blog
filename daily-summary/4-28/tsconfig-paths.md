# tsConfig & Webpack.resolve.alias

## tsConfig

`tsConfig`中使用`baseUrl, paths`两个属性来做路径映射, 当ts编译ts文件时, 会根据这两个配置来获取组件路径.

## Webpack.resolve.alias

`webpack`打包模块时, 根据`resolve.alias`来获取组件路径

## 总结

两者的映射都是在不同时期做的路径映射, 如果俩者的映射路径不匹配就会导致无法解析其中一个映射.

所以,我们需要将两者映射路径统一, 有以下解决办法:

- `ts-config-webpack-plugin`: 该插件是将`tsconfig`中的映射直接覆盖到`resolve.alias`. 所以不需要在`webpack`中配置别名
- `awesome-typescript-loader`: 来代替`ts-loaader`, 该解析器包含上述plugin
- 自定义两者路径映射.
