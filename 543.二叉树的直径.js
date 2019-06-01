/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let res = 0;
  const nodeDepthMap = new Map();
  const getDepth = function(node) {
    if (!node) {
      return 0;
    }
    if (nodeDepthMap.get(node)) {
      return nodeDepthMap.get(node);
    }
    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);
    const h = Math.max(leftDepth, rightDepth) + 1;
    res = Math.max(res, leftDepth + rightDepth);
    nodeDepthMap.set(node, h);
    return h;
  };
  getDepth(root);
  return res;
};
