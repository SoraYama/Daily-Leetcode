No. 22: Generate Parentheses
================
## Description
* Given *n* pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
For example, given *n* = 3, a solution set is:
```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```
* URL: [Click me](https://leetcode.com/problems/generate-parentheses/description/)
* Difficulty: <font color="#FF7F00">Medium</font> <!-- Green:#90EE90 Red:#FF0000 Orange: #FF7F00 -->
-------------
## Delightful version
```javascript
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
```
-------------
## Thinking
+ This algorithm is a copy from the highest voted Java version: ![Easy to understand Java backtracking solution](https://discuss.leetcode.com/topic/8724/easy-to-understand-java-backtracking-solution)

+ For the problems like this kind, we can know that DFS or recursive function is best way to solve
+ So, basic algorithm is very useful and necessary,　頑張れ、空山君！

