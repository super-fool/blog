/**
 *  两数之和
 *  1. 返回两数的索引数组
 *  2. 返回的索引不能重复
 *  3. 如果有多个数之和, 只返回一组索引即可.
 */

var twoSum = function (nums, target) {
  let red;
  for (let i = 0; i < nums.length; i++) {
    const tempNums = nums.slice(i + 1);
    red = tempNums.findIndex((n) => target - nums[i] === n);
    if (red > -1) {
      return [i, red + i + 1];
    }
  }
  return [];
};

var twoSum1 = function (nums, target) {
  let map = new Map();
  let nl = nums.length;
  for (let i = 0; i < nl; i++) {
    const red = target - nums[i];
    if (map.has(red)) {
      return [map.get(red), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

/**
 * 返回所有两数之和的索引数组, [2,3,3,4] -> [[0, 3], [1, 2]]
 */

var twoSum2 = function (nums, target) {
  let arr = [],
    nl = nums.length;
  for (let i = 0; i < nl; i++) {
    for (let j = i + 1; j < nl; j++) {
      if (target - nums[i] === nums[j]) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
};
