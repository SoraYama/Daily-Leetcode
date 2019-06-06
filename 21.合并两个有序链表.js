/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let h1 = l1,
    h2 = l2;
  let r;
  if (l1.val < l2.val) {
    r = l1;
    h1 = h1.next;
  } else {
    r = l2;
    h2 = h2.next;
  }
  let hr = r;
  while (h1 !== null && h2 !== null) {
    if (h1.val < h2.val) {
      hr.next = h1;
      h1 = h1.next;
    } else {
      hr.next = h2;
      h2 = h2.next;
    }
    hr = hr.next;
  }
  if (h1) {
    hr.next = h1;
  } else if (h2) {
    hr.next = h2;
  }
  return r;
};

// Top Voted:
// 利用一个巧妙的哨兵头来规避额外的判断

// var mergeTwoLists = function(l1, l2) {
//   var mergedHead = { val : -1, next : null },
//       crt = mergedHead;
//   while(l1 && l2) {
//       if(l1.val > l2.val) {
//           crt.next = l2;
//           l2 = l2.next;
//       } else {
//           crt.next = l1;
//           l1 = l1.next;
//       }
//       crt = crt.next;
//   }
//   crt.next = l1 || l2;

//   return mergedHead.next;
// };
