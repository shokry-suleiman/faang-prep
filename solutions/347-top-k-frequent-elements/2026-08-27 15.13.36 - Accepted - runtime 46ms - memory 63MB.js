/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let count = {};
    let minHeap = new MinPriorityQueue((it) => it.freq);

    for (let num of nums)
        count[num] = (count[num] || 0) + 1;

    for (let key in count) {
        minHeap.enqueue({ val: +key, freq: count[key] })
        if(minHeap.size()>k)
            minHeap.dequeue()
    }

    return minHeap.toArray().map((it)=>it.val)
};