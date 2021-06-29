# npm init

今天看[Vite文档](https://cn.vitejs.dev/guide/#browser-support), 搭建项目使用命令:`npm init @vitejs/app`.

我当时就很好奇`npm init`不是初始化一个npm包吗? 好奇的我开始了探索:

## `npm init <initializer>`

这行cli有两个用处:
1. set up a new npm package.
2. use existing npm package -> `initializer`.

如果我们指定了一个包时, 会有以下转换:
```js
npm init foo -> npm exec create-foo
npm init @usr/foo -> npm exec @usr/create-foo
npm init @usr -> npm exec @usr/create
```

所以, 我们就可以明白以下几个意思了:
```js

npm init react-app -> npm exec create-react-app
npm init @vite/app -> npm exec @vite/create-app
```

上述我们发现了一个指令`npm exec`.

