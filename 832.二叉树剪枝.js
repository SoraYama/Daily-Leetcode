/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 二叉树剪枝
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map(row => {
    for (let i = 0, j = row.length - 1; i < j; i++, j--) {
      let tmp = row[i];
      row[i] = row[j];
      row[j] = tmp;
    }
    for (let i = 0; i < row.length; i++) {
      row[i] = row[i] === 0 ? 1 : 0;
    }
    return row;
  });
};

// console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
