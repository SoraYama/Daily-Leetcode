/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) {
    return null;
  }
  let p1 = (p2 = head);
  for (let i = 0; i < n; i++) {
    p2 = p2.next;
  }
  if (p2 === null) {
    return head.next;
  }
  while (p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p1.next = p1.next.next;
  return head;
};
