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
var swapPairs = function(head) {
    let dummyNode = new ListNode(0,head);
    let prev = dummyNode;
    let curr = head;

    while(curr && curr.next){
        let nextPair= curr.next.next;
        let second = curr.next;

        second.next = curr; 
        curr.next = nextPair;
        prev.next = second

        prev = curr;
        curr = nextPair

    }

    return dummyNode.next
};