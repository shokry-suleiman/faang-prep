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
    let groupPrevNode = dummyNode;

    while (true) {
        let kth = getKth(groupPrevNode, k);

        if (!kth)
            break;

        let groupNextNode = kth.next;

        //reverse
        let prev = kth.next;
        let curr = groupPrevNode.next;
        while (curr != groupNextNode) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        //move forward
        let temp = groupPrevNode.next;
        groupPrevNode.next = kth;
        groupPrevNode = temp;
    }

    return dummyNode.next
};

let getKth = function (node, k) {
    while (node && k > 0) {
        node = node.next;
        k -= 1;
    }
    return node;
}