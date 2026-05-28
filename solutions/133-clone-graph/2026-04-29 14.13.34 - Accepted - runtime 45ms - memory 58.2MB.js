/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if(!node)
        return
    let map = new Map();
    map.set(node, new _Node(node.val))
    let q = [node]
    while (q.length > 0) {
        let current = q.shift();
        for (let neighbor of current.neighbors) {
            if (!map.get(neighbor)) {
                map.set(neighbor, new _Node(neighbor.val))
                q.push(neighbor)
            }
            map.get(current).neighbors.push(map.get(neighbor))
        }
    }
    return map.get(node)
};