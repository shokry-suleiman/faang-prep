/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    let map = {};
    let preIndex = 0;

    for (let [indx, val] of inorder.entries())
        map[val] = indx;

    var dfs = function (left, right) {
        if (left > right)
            return null

        let rootVal = preorder[preIndex++]
        let root = new TreeNode(rootVal);
        let mid = map[rootVal]

        root.left = dfs(left, mid - 1)
        root.right = dfs(mid + 1, right)
        return root;
    }

    return dfs(0, inorder.length - 1)
};

