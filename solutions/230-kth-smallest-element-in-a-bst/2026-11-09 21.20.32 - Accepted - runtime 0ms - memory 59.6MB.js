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
    let res;
    let steps = 0;

    function inOrder(node) {
        if (!node || steps >= k)
            return

        inOrder(node.left);
        steps += 1;

        if (steps == k) {
            res = node.val;
        }
        inOrder(node.right);
    }

    inOrder(root);

    return res;
};