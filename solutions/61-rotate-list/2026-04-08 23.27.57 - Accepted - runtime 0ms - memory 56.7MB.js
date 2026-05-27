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
var rotateRight = function (head, k) {
    if (!head || !head.next || k == 0) return head;

    let len = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next
        len++;
    }

    k = k % len
    if (k == 0)
        return head;

    tail.next = head;
    for (let i = 0; i < len - k; i++)
        tail = tail.next;

    head = tail.next;
    tail.next = null
    return head;
};