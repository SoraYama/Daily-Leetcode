/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let node = root;
  while (node !== null) {
    let val = node.val;
    if (val < p.val && val < q.val) {
      node = node.right;
    } else if (val > p.val && val > q.val) {
      node = node.left;
    } else {
      return node;
    }
  }
  return null;
};
