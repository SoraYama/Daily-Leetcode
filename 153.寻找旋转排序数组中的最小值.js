/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  let left = 0;
  let right = len - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid] < nums[left]) {
      right = mid;
    } else if (nums[mid + 1] > nums[right]) {
      left = mid + 1;
    } else {
      return nums[0];
    }
  }
};
