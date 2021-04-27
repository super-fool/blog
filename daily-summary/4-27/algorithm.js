/**
 * 判断一个链表是否为回文链表
 * palindrome: 回文
 * leetcode: https://leetcode-cn.com/problems/palindrome-linked-list/
 */
const mocks = {
  value: "a",
  next: {
    value: "b",
    next: {
      value: "c",
      next: {
        value: "b",
        next: {
          value: "a",
        },
      },
    },
  },
};

/**
 * 1. 链表转换数组
 * 2. 双指针判断是否回文
 * 时间复杂度: O(n), 第一步, 将链表遍历赋值到数组中O(n); 第二步, 双指针判断执行了O(n/2),即O(n), 所以总复杂度O(2n) = o(n).
 * 空间复杂度: O(n), n代表链表的元素个数,我们只使用了一个数组来代表链表的个数.
 */
const isPalindrome = (head) => {
  const arr = [];
  while (head) {
    arr.push(head.value);
    head = head.next;
  }
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
/**
 * 快慢指针
 * 思考: 通过正向和逆向的迭代匹配, 将链表前半部分reverse, 与后半部分进行匹配.
 * 带来的问题: 修改了链表结构
 * 时间复杂度:O(n), n指链表大小
 * 空间复杂度O(1), 我们只会修改原本链表节点, 对战上不超过O(1)
 * slower: 指向中间节点
 * 通过slower截取链表前一半, 通过翻转跟后一段进行比较
 */
const isPalindrome = (head) => {
  let slower = head,
    faster = head,
    prev;
  while (faster && faster.next) {
    prev = slower;
    slower = faster.next;
    faster = faster.next.next;
  }
  // faster:            slower:
  // 奇数n: n%2 = 1      n/2 + 1
  // 偶数n: n%2 = 0      n/2
  prev.next = null;

  // 链表翻转
  let head2 = null;
  while (slower) {
    const tmp = slower.next;
    slower.next = head2;
    head2 = slower;
    slower = tmp;
  }

  while (head && head2) {
    if (head.value !== head2.value) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
};

