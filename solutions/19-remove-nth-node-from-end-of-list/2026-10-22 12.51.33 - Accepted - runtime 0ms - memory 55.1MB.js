/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode(0, head);
    let l = dummyNode;
    let r = head;

    while (n > 0) {
        r = r.next;
        n--;
    }

    while (r) {
        r = r.next;
        l = l.next;
    }

    l.next = l.next.next;
    return dummyNode.next
};