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
 * @return {number}
 */
var countNodes = function (root) {
    if (!root)
        return 0
    let left = root, leftH = 0;
    let right = root, rightH = 0
    while (left) { leftH++, left = left.left }
    while (right) { rightH++, right = right.right }

    if (rightH == leftH) return (1 << leftH) - 1
    return 1 + countNodes(root.left) + countNodes(root.right)
};