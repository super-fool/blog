/**
 * 编写一个函数, 返回一个对象的值为 666, 必须使用到 str='a.b.c'
 * 据说是一道滴滴面试基础题
 * 其实就是lodasdh的get方法
 */

// first: loop
const obj = {
  a: {
    b: {
      c: 666,
    },
  },
};
const str = "a.b.c";

function getValue(obj, str) {
  const strArr = str.split(".");

  for (let key of strArr) {
    obj = obj[key];
    if (!obj) {
      return undefined;
    }
  }
  return obj;
}

console.log(getValue(obj, str)); // 666
console.log(getValue(obj, "a.b.a")); // undefined

// reduce
str.split(".").reduce((obj, key) => obj[key], obj);

