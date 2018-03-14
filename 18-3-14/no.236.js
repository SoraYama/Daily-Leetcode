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

const markParent = (head) => {
  if (!head) return;
  head.left && (head.left.parent = head);
  head.right && (head.right.parent = head);
  markParent(head.left);
  markParent(head.right);
};

const genAncestors = (node) => {
  node.ancestors = [node];
  let head = node;
  while (head.parent) {
    head = head.parent;
    node.ancestors.push(head);
  }
};

const listCommonAncestor = (p, q) => {
  let ret;
  p.ancestors.forEach(pa => {
    if (ret) return;
    q.ancestors.forEach(qa => {
      if (qa === pa) {
        ret = qa;
        return;
      };
    });
  })
  return ret;
};

var lowestCommonAncestor = function (root, p, q) {
  if (p === q) return p;
  markParent(root);
  genAncestors(p);
  genAncestors(q);
  console.log(root);
  return listCommonAncestor(p, q);
};


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
  if (root === p || root === q || root === null)
      return root;
  else {
      const lcaLeft = lowestCommonAncestor(root.left, p, q);
      const lcaRight = lowestCommonAncestor(root.right, p, q);
      if (lcaLeft != null && lcaRight != null)
          return root;
      else
          return lcaLeft || lcaRight;
  }
};
