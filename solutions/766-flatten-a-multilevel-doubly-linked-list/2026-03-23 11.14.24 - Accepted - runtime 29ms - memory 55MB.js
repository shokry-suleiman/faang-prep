/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
     if (!head) return head;
    flattenTail(head);
    return head;
};

var flattenTail = function (node) {
    if (node.next == null && node.child == null)
        return node
    if (node.child) {
        let temp = node.next;
        let curr = node.child;
        let tail = flattenTail(node.child)
        node.next = curr;
        curr.prev = node;
        node.child = null
        if (temp) {
            tail.next = temp;
            temp.prev = tail;
            return flattenTail(temp)
        }
        return tail;
    }
    return flattenTail(node.next)
}
var append = function (head, child) {
    head.next = child
    head.child = null
    child.prev = head;
    let curr = head;
    while (head) {
        curr = head;
        head = head.next;
    }
    return curr;
}