/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const res = new ListNode();
  let h1 = l1;
  let h2 = l2;
  let hr = res;
  let flag = false;
  while (h1 !== null || h2 !== null) {
    const curSum =
      ((h1 && h1.val) || 0) + ((h2 && h2.val) || 0) + (flag ? 1 : 0);
    // console.log(h1.val, h2.val, curSum);
    flag = curSum >= 10;
    hr.val = curSum % 10;
    if ((h1 && h1.next) || (h2 && h2.next)) {
      hr.next = new ListNode();
      hr = hr.next;
    }
    h1 && (h1 = h1.next);
    h2 && (h2 = h2.next);
  }
  if (flag) {
    hr.next = new ListNode(1);
  }
  return res;
};
