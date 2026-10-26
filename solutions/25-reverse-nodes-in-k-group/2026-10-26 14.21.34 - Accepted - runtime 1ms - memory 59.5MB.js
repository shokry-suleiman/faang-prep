/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let dummyNode = new ListNode(0, head);
    let prevGroup = dummyNode;

    while (true) {
        let kth = getKthGroup(prevGroup, k);
        if (!kth)
            break

        let nextGroup = kth.next;

        let prev = kth.next
        let curr = prevGroup.next

        while (curr != nextGroup) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp
        }

        let temp = prevGroup.next;
        prevGroup.next=kth;
        prevGroup= temp;

    }

    return dummyNode.next;
};

/**
 * @param {ListNode} node
 * @param {number} k
 * @return {ListNode}
 */
var getKthGroup = function (node, k) {
    while (node && k > 0) {
        node = node.next;
        k--;
    }
    return node;
}
