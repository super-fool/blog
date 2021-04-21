## [== 和 === 的区别; 引用类型比较原始类型的转换规则.](https://github.com/super-fool/blog/issues/81)

## [BFC](https://zhuanlan.zhihu.com/p/25321647)

普通流: html中的元素根据根据前后位置由上而下进行排序, 内联元素水平排列, 块级元素自动占满一行. **普通流元素的位置由元素位置决定**.

浮动: 具有float选择器的元素,首先会根据普通流元素一样进行排序,然后根据float的方向尽可能的偏移, 会脱离普通流.

绝对定位: 脱离普通流, 因此不会对普通流元素造成影响, 定位元素位置由坐标及相对应的父元素/根元素决定的.

css 2.1 定义了BFC, 是页面的一块区域,并定了其渲染规则.

BFC元素可以看成一个独立容器, 容器里的元素不会影响到外部元素.

如何成为一个BFC元素:
- overflow: hidden | auto | scroll | overlay   (overflow 其实代表 overflow-x + overflow-y)
- display: flex | inline-block | table-cells
- position: absolute | fixed
- float: right | left

BFC元素可以解决的问题:
- 清除上下margin的重叠问题
- 清除浮动.(因为BFC容器只有包裹了自身的浮动元素才不会影响到外部元素, 会导致强行撑开)
## 伪类 和 伪元素

https://github.com/super-fool/blog/issues/82

## flex: 1 是什么的缩写

flex: 1等于

flex-grow：1

flex-shrink：1

flex-basis：0%。

用chrome的调试功能查看设置flex：1的元素，该css展开后可以看到

flex-shrink：1

flex-basis：0%，

利用computed：可以查看到flex-grow变为1(默认为0)

https://zhuanlan.zhihu.com/p/147541226

## promise.allSettled polyfill

```js

Promise.allSettled = function(promises) {
  let mappedPromises = promises.map((p) => {
    return p
      .then((value) => {
        return {
          status: 'fulfilled',
          value
        };
      })
      .catch((reason) => {
        return {
          status: 'rejected',
          reason
        };
      });
  });
  return Promise.all(mappedPromises);
};

let promises = [
  Promise.resolve(2),
  Promise.reject('This is rejected'),
  new Promise((resolve, reject) => setTimeout(resolve, 400, 67)),
];

Promise.allSettled(promises).then((result) => console.log(result));

```

## 栈

 [栈 及 coding](https://github.com/super-fool/blog/issues/83)
