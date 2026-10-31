/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let minHeap = new MinPriorityQueue((node) => node.val);
    let dummyNode = new ListNode(0)
    let head = dummyNode;

    for (let list of lists)
        if (list) minHeap.enqueue(list);

    while(minHeap.size()){
        let node = minHeap.dequeue();
        head.next = node;
        head= node;
        if(node.next)
            minHeap.enqueue(node.next);
    }

    return dummyNode.next
};