/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const len = sorted.length;
  const res = [];
  // console.log(sorted);
  for (let i = 0; i < len - 2; i++) {
    if (sorted[i] > 0) {
      break;
    }
    if (sorted[i] === sorted[i - 1]) {
      continue;
    }
    let head = i + 1;
    let tail = sorted.length - 1;
    while (head < tail) {
      // console.log(head, tail, sorted[head], sorted[tail], sorted[i]);
      if (sorted[head] + sorted[tail] + sorted[i] === 0) {
        res.push([sorted[i], sorted[head], sorted[tail]]);
        head++;
        tail--;
        // console.log("======", i, head, tail);
        while (head < tail && sorted[head] === sorted[head - 1]) {
          // console.log("+++++", head);
          head++;
        }
        while (head < tail && sorted[tail] === sorted[tail + 1]) {
          tail--;
        }
      } else if (sorted[head] + sorted[tail] + sorted[i] < 0) {
        head++;
      } else {
        tail--;
      }
    }
    // console.log(res);
  }
  return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
