/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (head == null)
        return null;

    let curr = head;
    const nodeMap = new Map()

    while (curr) {
        nodeMap.set(curr, new _Node(curr.val))
        curr = curr.next;
    }

    curr = head;
    while (curr) {
        let copyNode = nodeMap.get(curr);
        copyNode.next = curr.next ? nodeMap.get(curr.next) : null
        copyNode.random = curr.random ? nodeMap.get(curr.random) : null
        curr = curr.next;
    }

    return nodeMap.get(head)
};

