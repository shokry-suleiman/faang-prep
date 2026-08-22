/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let minHeap = [];

    var enqueue = function (num) {
        minHeap.push(num);
        shiftUp();
    }

    var shiftUp = function () {
        if (minHeap.length == 1)
            return

        let childIndex = size() - 1
        let parentIndex = (childIndex - 1) >> 1;
        while (parentIndex >= 0 && compare(childIndex, parentIndex)) {
            swap(childIndex, parentIndex);
            childIndex = parentIndex;
            parentIndex = (childIndex - 1) >> 1;
        }
    }

    var dequeue = function () {
        let last = minHeap.pop()
        if(minHeap.length > 0) {
            minHeap[0] = last;
            shiftDown();
        }
    }

    var shiftDown = function () {
        let parentIndex = 0;
        let bestChildIndex = (parentIndex * 2) + 1;
        let rightChildIndex = (parentIndex * 2) + 2;
        while (true) {
            if (bestChildIndex < size() && compare(rightChildIndex, bestChildIndex)) {
                bestChildIndex = rightChildIndex;
            }
            if (bestChildIndex < size() && compare(bestChildIndex, parentIndex)) {
                swap(bestChildIndex, parentIndex);
                parentIndex = bestChildIndex;
                bestChildIndex = (parentIndex * 2) + 1;
                rightChildIndex = (parentIndex * 2) + 2;

            } else {
                break;
            }
        }
    }

    var compare = function (i, j) {
        return minHeap[i] < minHeap[j];
    }

    var swap = function (i, j) {
        [minHeap[i], minHeap[j]] = [minHeap[j], minHeap[i]]
    }

    var peak = function () {
        return minHeap[0];
    }

    var size = function () {
        return minHeap.length;
    }

    for (let num of nums) {
        enqueue(num)
        if (size() > k)
            dequeue();
    }

    return peak()
};