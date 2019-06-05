/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const res = [];
  const s = nums.sort((a, b) => a - b);
  // console.log(s);
  for (let i = 0; i < s.length - 3; i++) {
    if (i > 0 && s[i - 1] === s[i]) {
      continue;
    }
    for (let j = i + 1; j < s.length - 2; j++) {
      if (j > i + 1 && s[j - 1] === s[j]) {
        continue;
      }
      let l = j + 1;
      let r = s.length - 1;
      while (l < r) {
        const sum = s[i] + s[j] + s[l] + s[r];
        // console.log("s[i], s[j], s[l], s[r]\n", s[i], s[j], s[l], s[r]);
        if (sum === target) {
          res.push([s[i], s[j], s[l], s[r]]);
          l++;
          r--;
          while (l < r && s[l] === s[l - 1]) {
            l++;
          }
          while (l < r && s[r] === s[r + 1]) {
            r++;
          }
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  return res;
};

// console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
