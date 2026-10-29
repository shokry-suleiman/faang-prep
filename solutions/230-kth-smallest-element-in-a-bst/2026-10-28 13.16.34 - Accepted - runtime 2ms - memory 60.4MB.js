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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    return traverse(root, [0])[k]
};

var traverse = function (node, arr) {
    if (!node)
        return arr;
    traverse(node.left, arr)
    arr.push(node.val)
    traverse(node.right, arr)
    return arr
}