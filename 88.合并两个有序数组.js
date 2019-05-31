/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let res = [];
  const nums1S = nums1.slice(0, m);
  let p1 = 0,
    p2 = 0;
  while (p1 <= m && p2 <= n) {
    if (p1 === m) {
      res = res.concat(nums2.slice(p2, n));
      break;
    }
    if (p2 === n) {
      res = res.concat(nums1.slice(p1, m));
      break;
    }
    if (nums1S[p1] < nums2[p2]) {
      res.push(nums1S[p1]);
      p1++;
    } else {
      res.push(nums2[p2]);
      p2++;
    }
  }
  nums1.splice(0, nums1.length, ...res);
};
