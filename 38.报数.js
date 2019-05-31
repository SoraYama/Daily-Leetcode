/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  const arr = new Array(n);
  arr[0] = "1";
  for (let i = 1; i < n; i++) {
    const p = arr[i - 1];
    arr[i] = "";
    let pid = 0;
    while (pid < p.length) {
      let count = 1;
      for (let i = pid + 1; p[pid] === p[i]; i++) {
        count++;
      }
      arr[i] = arr[i].concat(`${count}${p[pid]}`);
      pid += count;
    }
  }
  return arr[arr.length - 1];
};
