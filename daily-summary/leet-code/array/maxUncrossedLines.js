/**
 * code: https://leetcode.com/problems/uncrossed-lines/
 */

function maxUnCrossedLines(nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    let n = nums2[i];
    if (map.has(n)) {
      map.get(n).unshift(i);
    } else {
      map.set(n, [i]);
    }
  }

  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    let n = nums1[i];
    if (map.has(n)) {
      arr = arr.concat(map.get(n));
    }
  }

  let dp = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp.length ? Math.max(...dp) : 0;
}


/**
 * next
 */
function maxUnCrossedLines1(nums1, nums2) {
  const createArray = (length) => {
    return new Array(length).fill(0);
  };
  const dp = createArray(nums1.length + 1).map(() => createArray(nums2.length + 1));
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[nums1.length][nums2.length];
}
