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
var preorderTraversal = function(root) {
    let res=[]
    function visit(node){
        if(!node)
            return 
        res.push(node.val)
        visit(node.left)
        visit(node.right)
    }
    visit(root)
    return res
};