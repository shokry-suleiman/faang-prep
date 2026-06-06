/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let curr = head;
    let prev = new ListNode(0);
    prev.next = head;
    while (curr && curr.next) {
        let next = curr.next;
        curr.next = next.next;
        next.next = prev.next
        prev.next = next
    }
    return prev.next
};