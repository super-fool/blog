# 编程范式「Programming paradigm」

这是每一个程序员对待程序执行的想法. 

例如: 在OOP中, 程序员把程序看成是一系列相互作用的对象. 在方法论中, OOP又可以分为: 基于类的编程, 基于原型的编程; 再比如FP中, 程序员把程序看成是一组无状态的函数序列.

不同的编程语言中, 有着自己独特的编程范式.(这里并不是代表 1 - 1, 像C++就可以拥有多种范式: 命令式编程, 面向对象编程, 范型编程)

## 命令式


## 函数式 「Functional Programming」

函数不是计算机中的函数, 而是指**数学中的函数.** 函数是一种关系, 是一种数据的**映射**, 也就是说: 一个函数的值仅取决于函数参数的值, 不依赖于其他的**状态**.

在函数领域中, **函数是一等公民**, 可以在任何地方定义, 可以声明在函数内函数外,  也可以作为参数,作为返回值, 甚至可以函数组合(这就是vue2.0和react之间的区别).

纯函数式编程中的变量指的是**代数中的变量**, 变量的值是不可变的, `x = x + 1`在程序中执行是对的, 但是在数学中这是个**假等式**.

函数式中的条件语句和循环语句都是**具有返回值的**.

### 总结函数式中好处

- 不可变性(纯函数): 代表着拒绝一切副作用, 既不依赖外部状态, 也不修改外部状态(No Side Effect).
- 映射: 代表着**input值和ouput值具有着唯一关系, 即input值不变,那么ouput值也不变**, 这里也可以发现,input值是`immutable`的.
- 一等公民: 代表着自由编程.



## 响应式「Reactive Programming」

`RP`三要素:
- `Data streams`: [按时间排序的`Events`序列](https://www.zhihu.com/question/36431501), 是一个`Immutability`.
- `Functional Programming`: 函数式编程
- `Async observers`: 异步观察

## 函数式响应式 「Functional Reactive Programming」



## 声明式 「Declarative Programming」



## 参考:

https://en.wikipedia.org/wiki/Programming_paradigm
https://www.zhihu.com/question/28292740