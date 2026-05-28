/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = [];
    function traverse(node, level) {
        if (!node)
            return
        res[level] = node.val
        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }
    traverse(root, 0)
    return res;
};