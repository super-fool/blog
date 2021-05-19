/**
 * code: https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 */


var search = function (nums, target) {
  // 防止边界溢出
  if (nums[0] > target || nums[nums.length - 1] < target) {
    return 0;
  }
  // 初始化左右指针
  let i = 0,
    j = nums.length - 1;
  let count = 0;
  // 第一次二分, 确定right边界
  while (i <= j) {
    let m = (i + j) >> 1;
    [i, j] = nums[m] <= target ? [m + 1, j] : [i, m - 1];
    console.log(`${count++}: i:${i}, j:${j}`);
  }
  // 右边界赋值
  let right = i;
  // reset
  (i = 0), (j = nums.length - 1);
  // 第二次二分, 确定左边界
  while (i <= j) {
    let m = (i + j) >> 1;
    [i, j] = nums[m] >= target ? [i, m - 1] : [m + 1, j];
    console.log(`${count++}: i:${i}, j:${j}`);
  }
  let left = j;
  return right - left - 1;
};

search([3, 4, 6, 6, 6, 7], 6);
search([3, 4, 6, 6, 6, 7], 2);
search([3, 4, 6, 6, 6, 7], 10);
search([6, 6, 6, 6, 6, 6], 6);
