/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// DP
// var lengthOfLIS = function(nums) {
//   const len = nums.length;
//   const r = new Array(len).fill(1);
//   for (let i = 1; i < len; i++) {
//     let q = 1;
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         r[i] = Math.max(r[i], r[j] + 1);
//       }
//     }
//   }
//   let max = r[0];
//   for (let i = 1; i < len; i++) {
//     max = Math.max(max, r[i]);
//   }
//   return max || 0;
// };

// 贪心+二分
var lengthOfLIS = function(nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  const r = [nums[0]];

  const binPos = (arr, target, left, right) => {
    // console.log(arr, target, left, right);
    if (left === right) {
      return left;
    }
    let prev = Math.floor((left + right) / 2);
    // console.log("prev: ", prev);
    if (target === arr[prev]) {
      return prev;
    } else if (target > arr[prev] && target < arr[prev + 1]) {
      return prev + 1;
    } else if (target < arr[prev]) {
      return binPos(arr, target, left, prev);
    } else {
      return binPos(arr, target, prev + 1, right);
    }
  };

  for (let i = 1; i < len; i++) {
    if (nums[i] > r[r.length - 1]) {
      r.push(nums[i]);
    } else {
      r[binPos(r, nums[i], 0, r.length - 1)] = nums[i];
    }
  }
  return r.length;
};

// console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
