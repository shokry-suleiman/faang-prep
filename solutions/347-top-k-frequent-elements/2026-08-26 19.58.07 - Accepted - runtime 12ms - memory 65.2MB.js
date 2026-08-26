/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let minHeap = [];
    let count = {};

    let enqueue = function (item) {
        minHeap.push(item);
        shiftUp()
    }

    let shiftUp = function () {
        if (minHeap.length == 1)
            return

        let childIndex = size() - 1
        let parentIndex = (childIndex - 1) >> 1;
        while (parentIndex >= 0 && compare(childIndex, parentIndex)) {
            swap(parentIndex, childIndex);
            childIndex = parentIndex
            parentIndex = (childIndex - 1) >> 1;
        }
    }

    let dequeue = function () {
        let last = minHeap.pop();
        if (size() > 0) {
            minHeap[0] = last;
            shiftDown()
        }
    }

    let shiftDown = function () {
        let parentIndex = 0;
        let bestChildIndex = (parentIndex * 2) + 1;
        let rightChildIndex = (parentIndex * 2) + 2;

        while (true) {
            if (rightChildIndex < size() && compare(rightChildIndex, bestChildIndex)) {
                bestChildIndex = rightChildIndex;
            }
            if (bestChildIndex < size() && compare(bestChildIndex, parentIndex)) {
                swap(bestChildIndex, parentIndex);
                parentIndex = bestChildIndex;
                bestChildIndex = (parentIndex * 2) + 1;
                rightChildIndex = (parentIndex * 2) + 2;
            } else {
                break
            }
        }
    }

    let compare = function (i, j) {
        return minHeap[i].freq < minHeap[j].freq
    }

    let swap = function (i, j) {
        [minHeap[i], minHeap[j]] = [minHeap[j], minHeap[i]]
    }

    let size = function () {
        return minHeap.length;
    }

    let peak = function () {
        return minHeap[0]
    }

    for (let num of nums)
        count[num] = (count[num] || 0) + 1;

    for (let key in count) {
        enqueue({ val: key, freq: count[key] })
        if (size() > k)
            dequeue()
    }
    return minHeap.map((it) => +it.val)
};