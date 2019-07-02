/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const res = [];

  const per = (arr, k) => {
    const end = arr.length - 1;
    if (k === end) {
      res.push(arr.slice());
      return;
    }

    for (let i = k; i <= end; i++) {
      swap(arr, k, i);
      per(arr, k + 1, end);
      swap(arr, k, i);
    }
  };

  per(nums, 0);

  return res;
};
