/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  const dfs = (curStr, left, right) => {
    if (curStr.length === n * 2) {
      res.push(curStr);
      return;
    }
    if (left < n) {
      dfs(curStr + "(", left + 1, right);
    }
    if (right < left) {
      dfs(curStr + ")", left, right + 1);
    }
  };
  dfs("(", 1, 0);
  return res;
};
