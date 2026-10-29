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
    let prevNodeGroup = dummyNode;

    while (true) {
        let kth = getKth(prevNodeGroup, k);
        if (!kth)
            break;

        let nextNodeGroup = kth.next;

        //reverse;
        let prev = kth.next;
        let curr = prevNodeGroup.next;
        while (curr != nextNodeGroup) {
            let temp = curr.next;
            curr.next = prev
            prev = curr;
            curr = temp
        }
        
        //move forward
        let temp = prevNodeGroup.next;
        prevNodeGroup.next = kth;
        prevNodeGroup = temp
    }

    return dummyNode.next;
};

var getKth = function (node, k) {
    while (node && k > 0) {
        node = node.next;
        k = k - 1;
    }
    return node;
}