/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") {
    return true;
  }
  const lb = ["(", "[", "{"];
  const rb = [")", "]", "}"];
  const resStack = [];
  for (let i = 0; i < s.length; i++) {
    if (lb.includes(s[i])) {
      resStack.push(s[i]);
    } else if (rb.includes(s[i])) {
      if (resStack[resStack.length - 1] !== lb[rb.indexOf(s[i])]) {
        return false;
      } else {
        resStack.pop();
      }
    }
  }
  return resStack.length === 0;
};

/** elegant solution
  var isValid = function(s) {
    while(s.match(/\(\)|\[\]|\{\}/g)){
        s = s.split('()').join('').split('[]').join('').split('{}').join('');
    }
    if(!s) return true;
    return false;
};
*/
