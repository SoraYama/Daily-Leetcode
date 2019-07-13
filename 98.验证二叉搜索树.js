/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let currentVal = -Infinity;
  const m = node => {
    if (!node) {
      return;
    }
    if (m(node.left) === false) {
      return false;
    }
    if (currentVal >= node.val) {
      return false;
    }
    currentVal = node.val;
    if (m(node.right) === false) {
      return false;
    }
  };
  return m(root) !== false;
};
