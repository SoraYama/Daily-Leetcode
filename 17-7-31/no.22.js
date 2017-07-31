/**
 * @param {number} n
 * @return {string[]}
 */
var backTrack = function(arr, str, open, close, max) {
  if(str.length == max * 2) {
    arr.push(str);
    return;
  }
  if(open < max) {
    backTrack(arr, str + '(', open + 1, close, max);
  }
  if(close < open) {
    backTrack(arr, str + ')', open, close + 1, max);
  }
}
var generateParenthesis = function(n) {
  var res = [];
  backTrack(res, "", 0, 0, n);
  return res;
};