/**
 * leetcode: https://leetcode-cn.com/problems/implement-strstr/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const h = haystack.length,
    n = needle.length;
  for (let i = 0; i + n <= h; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (haystack[j + i] != needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};

/**
 * KMP算法: 字符串模式匹配算法
 * 在主串T中找到第一次出现完整子串P的位置.
 */
