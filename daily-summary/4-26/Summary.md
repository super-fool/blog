## useEffect

官档摘抄:
- 在 React 的 class 组件中, render 函数不应该包含任何的**副作用**. 所以我们将副作用放到了`componentDidMount`和`componentDidUpdate`中.
- `useEffect`在每次渲染DOM时都会调用, 包括了**初次渲染和状态更新渲染**. 无需考虑**挂载和更新**
- `useEffect`使用了闭包机制, 保证了函数组件中的任何变量均可调用, **注意闭包过期**
- 传递给`useEffect`的函数每次都会**不一样**, **effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染**
- `useEffect`表示异步, 如果需要同步DOM渲染,比如组件拖拽时,可以是用`useLayoutEffect`