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

    for (let list of lists)
        if (list)
            minHeap.enqueue(list);

    let sortedList = new ListNode(0, null);
    let tail = sortedList;

    while (minHeap.size()) {
        let node = minHeap.dequeue();
        tail.next = node;
        tail = tail.next
        if (node.next)
            minHeap.enqueue(node.next)
    }

    return sortedList.next
};