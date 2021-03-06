## 小程序与普通网页的区别

### 普通网页

1. 浏览器的每一个页签都是一个独立的进程, 里面包含了很多各司其职的业务线程, 比如JS引擎(脚本)线程, UI渲染线程, 请求线程,事件触发线程, 定时器线程等.
> 定时器线程? 异步任务分为宏任务和微任务, 宏任务指的是浏览器自带的异步任务,比如setTimeout; 微任务指的是JS自带的异步任务, 比如Promise.
2. JS线程和UI线程是互斥的, 其原因是**防止在UI渲染DOM时, JS修改DOM而导致渲染有误, 所以其中一个执行时,另一个会被暂时挂起**. 所以, 我们要么使用`defer, async`, 要么将脚本放置DOM最后.

为什么JS不能是多线程呢?
答: 如果多个JS同时操作一个DOM时,浏览器该如何判断DOM该采取哪一个操作呢. 这就是为什么JS不能像Java(加锁机制)一样是多线程的.


### 小程序页面

分为逻辑层和渲染层, 逻辑层运行在JSCore中, 缺乏DOM和BOM API.

| 运行环境 | 逻辑层 | 渲染层|
| --- | --- | --- |
| IOS | JSCore | WKWebView(Safari) |
| Android | V8 | chromium |
| 开发工具 | NWJS | Chrome WebView |


#### 逻辑层

JS引擎是能够将JS代码处理并执行的运行环境, 不要和浏览器内核搞混了, 内核是将也页面转换为可视化的图像结果, 即渲染引擎.

- JSCore: 使用了WebKit的默认JS引擎, 用OC进行了封装
- V8: Google开源的使用C++编写的引擎
- NWJS: node-webkit 引擎

#### 小程序执行逻辑

小程序的宿主是微信, 但不依赖微信, 可以理解为不需要和微信一起发版进行更新, 采用了Hybird-混合架构模式:**使用WebView渲染UI, 使用类似WebWorker的独立线程运行逻辑.**

小程序并没有在WebView中进行JS执行能力的开放, 只是用来渲染UI. 将JS能力放在了JS引擎(沙箱)中,也就是逻辑线程. 两者的交互只能通过Native 进行交互(中间者模式)

#### 逻辑线程和渲染线程的交互方式

整个交互过程是一个典型的**事件驱动方式**:

1. 渲染层通过与用户的交互触发event;
2. event传递给native,再由native传递给逻辑层进行处理;
3. 逻辑层处理后将更新的数据通过native传递渲染层;
4. 最后由渲染层重新渲染UI;

如何保证小程序的性能?

- 使用简单的UI结构
- 降低JS的逻辑复杂度
- 减少setData的频率和数据体量, 因为setData直接或间接的操作DOM是很费时间的一个过程. 另一个原因就是防止DOM的回流和重绘

### 总结

1. 普通网页的JS线程和UI线程互斥, 小程序是相互独立的执行, 因为小程序不具备操作DOM的API.
2. 普通网页之间的差异取决于浏览器的内核, 小程序取决于手机系统.