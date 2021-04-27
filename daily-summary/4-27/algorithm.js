/**
 * 判断一个链表是否为回文链表
 * palindrome: 回文
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
 * 时间复杂度: O(n), 
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
