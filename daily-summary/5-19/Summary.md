## Service Workers API

## Web Workers API

提供了多线程执行JS代码的能力, Woker线程与主线程并不是扁平的, 而是**主从多线程模型**.

Worker线程并不能操作DOM, 其原因很简单, 防止同时操作同一个DOM而出现分歧. 这不同于Java, Java具有加锁功能,所以可以使用多线程.

## AbstractWorker

## SharedWorker


1. Class是个构造函数的语法糖
2. Class中只能定义方法, 且方法默认为不可枚举的, 且方法定义在原型上(prototype)
3. Class中的constructor方法, 可以不用显式声明, 会默认添加
4. Class中的方法全部是严格模式.

