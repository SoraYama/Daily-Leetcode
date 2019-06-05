/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
  let res = true;
  if (!root) {
    return true;
  }
  const map = new Map();
  const dfs = node => {
    if (!res) {
      return -1;
    }
    if (!node) {
      return 0;
    }
    const cache = map.get(node);
    if (cache) {
      return cache;
    }
    let l = dfs(node.left);
    let r = dfs(node.right);
    const h = Math.max(l, r) + 1;
    map.set(node, h);
    if (Math.abs(l - r) > 1) {
      res = false;
      return -1;
    }
    return h;
  };
  dfs(root);
  return res;
};
