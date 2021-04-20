/**
 * Code Anatomy - For loops, array reduce and method chaining
 *
 */

const files = ["foo.txt", ".bar", " ", "bar.foo"];

let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    filePaths.push(filePath);
  }
}
/**
 * why use for of without forEach ??
 * first, for of can use 'break', 'continue'.
 * for...in 遍历的是key, for...of遍历的是value,
 * for...in 遍历的是可枚举的属性, 即__proto__的可枚举属性也可以遍历出来, for...of遍历的是迭代对象的值.
 * for...of 是可以控制迭代的.
 * for...of 每一个元素只会被循环一次, 所以大O复杂度是O(n)
 * 最终可参考MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

const filePathsWithReduce = files.reduce((acc, file) => {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    acc.push(fileName);
  }
  return acc;
}, []);

/**
 * Array.prototype.reduce 也可以返回同样的值,
 * for...of还需要在外部声明一个变量, 但是reduce直接返回结果值.
 * reduce更常见, 因为流行函数式编程, functional programming
 */

const filePathsWithChain = files
  .map((file) => file.trim())
  .filter(Boolean)
  .map((fileName) => `~/cool_app/${fileName}`);

/**
 * 链式更易于重构和阅读, 扩展时也可以随着需求增长
 * O(cN), c代表每一个元素的遍历c次. 即链子的长度.
 */
