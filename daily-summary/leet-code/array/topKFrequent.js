/**
 * code: https://leetcode-cn.com/problems/top-k-frequent-words/solution/
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let hash = new Map();
  // for (let i = 0; i <= words.length; i++) {
  //   if (!hash.get(words[i])) {
  //     let count = 1;
  //     hash.set(words[i], count);
  //     for (let j = i + 1; j <= words.length; j++) {
  //       if (words[j] === words[i]) {
  //         hash.set(words[i], ++count);
  //       }
  //     }
  //   }
  // }
  for (const word of words) {
    hash.set(word, (hash.get(word) || 0) + 1);
  }

  const rec = [];

  for (const entry of hash.keys()) {
    rec.push(entry);
  }

  // const sortCountFn = (firstItem, secondItem) => {
  //   return firstItem[1] > secondItem[1] && -1;
  // };
  // const sortLetterFn = (firstItem, secondItem) => {
  //   if (secondItem[1] === firstItem[1]) {
  //     return firstItem[0] < secondItem[0] && -1;
  //   }
  // };

  rec.sort((word1, word2) =>
    hash.get(word1) === hash.get(word2)
      ? word1.localeCompare(word2) // WTF
      : hash.get(word1) - hash.get(word2)
  );

  // return Array.from(hash)
  //   .sort(sortCountFn)
  //   .sort(sortLetterFn)
  //   .map((item) => item[0])
  //   .slice(0, k);

  return rec.slice(0, k);
};

/**
 * 链式调用
 */
var topKFrequent1 = function (words, k) {
  return words
    .count()
    .limit(k)
    .map((i) => i[0]);
};

Array.prototype.count = function () {
  return Array.from(
    this.reduce(
      (map, word) => map.set(word, (map.get(word) || 0) + 1),
      new Map()
    )
  ).sort((a, b) =>
    b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );
};

Array.prototype.limit = function (n) {
  return this.slice(0, n);
};
