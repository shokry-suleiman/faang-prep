/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {};
    for (let num of nums) {
        if (!map[num])
            map[num] = 1;
        else
            map[num] += 1
    }

    let minHeap = new MinPriorityQueue((element) => element.freq);

    for (let key in map) {
        minHeap.enqueue({ val: +key, freq: map[key] })
        if (k < minHeap.size())
            minHeap.dequeue()
    }

    return minHeap.toArray().map((item) => item.val)
};