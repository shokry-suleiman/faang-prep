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
var swapPairs = function (head) {
    let dummyNode = new ListNode(0, head);
    let curr = head;
    let prev = dummyNode;

    while (curr && curr.next) {

        //Save Pointers
        let nextPair = curr.next.next;
        let second = curr.next;

        //Reverse Pointers
        second.next = curr;
        curr.next = nextPair
        prev.next = second;

        //Update Pointes
        prev = curr;
        curr = nextPair
    }

    return dummyNode.next;
};