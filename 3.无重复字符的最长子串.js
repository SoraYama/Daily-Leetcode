/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   if (s === "") {
//     return 0;
//   }
//   let r = 1;
//   for (let i = 0; i < s.length - 1; i++) {
//     let count = 1;
//     const hash = { [s[i]]: i };
//     for (let j = i + 1; j < s.length; j++) {
//       // console.log(hash, s[j]);
//       if (typeof hash[s[j]] === "undefined") {
//         count++;
//         hash[s[j]] = j;
//         // console.log(i, j, count);
//       } else {
//         break;
//       }
//     }
//     r = Math.max(count, r);
//   }
//   return r;
// };
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  const hash = {};
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined && hash[s[i]] >= left) {
      left = hash[s[i]] + 1;
    }
    hash[s[i]] = i;
    max = Math.max(i - left + 1, max);
    // console.log(hash, left, i, max);
  }
  return max;
};
