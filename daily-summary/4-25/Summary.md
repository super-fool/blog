## JQuery load, ready

### load(被弃用)

`$(document).load` === `<body onload="load()"></body>`
load事件的触发是在**DOM加载完毕 且 绑定元素及内部img元素加载完毕 之后触发.**
load可以绑定到任何元素中, 比如`$('img').load(() => {})`

load事件需要注意:
1. 如果图片被缓存是无法触发load
2. 无法正常的DOM冒泡
3. 跨浏览器情况下不可靠


### ready

ready 触发时机是在**DOM加载完毕后触发**

## 内存泄漏

- 打印 console.log
- 计时器
