/**
 * code: https://leetcode-cn.com/problems/add-two-numbers/submissions/
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let sum = new ListNode(0);
  let head = sum;
  while (l1 || l2) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;
      let r1 = val1 + val2 + carry
      carry = r1 >= 10 ? 1 : 0
      sum.next = new ListNode(r1 % 10)
      sum = sum.next 
      if (l1) l1 = l1.next 
      if (l2) l2 = l2.next 
  }
  if(carry) {
      sum.next = new ListNode(carry);
  }
  return head.next
};