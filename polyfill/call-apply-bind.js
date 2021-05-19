/**
 * 三者的主要目的: 显式的修改函数的上下文->this.
 * call, apply 会执行函数, bind返回一个待执行函数.
 * apply 绑定函数传参以数组形式, call 和 bind 以传统方式传参.
 */

var root =
  (typeof self == "object" && self.self === self && self) ||
  (typeof global == "object" && global.global === global && global) ||
  this;

/**
 * call-polyfill
 */

Function.prototype.myCall = function (context, ...args) {
  let ctx = root;
  let func = Symbol();
  ctx[func] = this;
  args = args || [];
  const res = ctx[func](...args);
  delete ctx[func];
  return res;
};

/** 
 * test
function mockFunc(str) {
  console.log(this.pre + str);
}

mockFunc.myCall({ pre: "Hello " }, "World"); // -> Hello World
var pre = "hello ";
mockFunc.myCall(null, "world"); // -> hello world
 */


/**
 * apply-polyfill
 */
Function.prototype.myApply = function (context, args = []) {
  let ctx = root;
  let func = Symbol();
  ctx[func] = this;
  const res = ctx[func](args);
  delete ctx[func];
  return res;
};

/**
 * bind-polyfill
 */

Function.prototype.myBind = function (context, ...args) {
  let fn = this;
  return function newFN(...newArgs) {
    if (this instanceof newFN) {
      return new fn(...args, ...newArgs);
    }
    return fn.apply(context, [...args, ...newArgs]);
  };
};
