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
var deleteDuplicates = function (head) {
    let set = {}
    let tempNewHead =new ListNode(0);
    let newHead = tempNewHead
    while (head) {
        if(set[head.val]==null){
            tempNewHead.next = new ListNode(head.val);
            tempNewHead = tempNewHead.next;
            set[head.val] = 1
        }
        head = head.next;
    }
    

    return newHead.next

};