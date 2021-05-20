/**
 * code: https://leetcode-cn.com/problems/top-k-frequent-words/solution/
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let hash = new Map();
  for (let i = 0; i <= words.length; i++) {
    if (!hash.get(words[i])) {
      let count = 1;
      hash.set(words[i], count);
      for (let j = i + 1; j <= words.length; j++) {
        if (words[j] === words[i]) {
          hash.set(words[i], ++count);
        }
      }
    }
  }
  const sortCountFn = (firstItem, secondItem) => {
    return firstItem[1] > secondItem[1] && -1;
  };
  const sortLetterFn = (firstItem, secondItem) => {
    if (secondItem[1] === firstItem[1]) {
      return firstItem[0] < secondItem[0] && -1;
    }
  };

  return Array.from(hash)
    .sort(sortCountFn)
    .sort(sortLetterFn)
    .map((item) => item[0])
    .slice(0, k);
};
