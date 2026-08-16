/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let maxHeap = [];
    let count = {};
    let res = "";

    for (let char of s)
        count[char] = (count[char] || 0) + 1;

    let enqueue = function (item) {
        maxHeap.push(item);
        shiftUp();
    };

    let dequeue = function () {
        let top = maxHeap[0];
        let last = maxHeap.pop();
        if (size() > 0) {
            maxHeap[0] = last;
            shiftDown();
        }
        return top
    }

    let shiftUp = function () {
        let childIndex = size() - 1;
        let parentIndex = (childIndex - 1) >> 1;

        while (parentIndex >= 0 && compare(parentIndex, childIndex)) {
            swap(parentIndex, childIndex)
            childIndex = parentIndex;
            parentIndex = (childIndex - 1) >> 1;
        }
    };

    let shiftDown = function () {

        let parentIndex = 0;
        let bestIndex = (parentIndex * 2) + 1;
        let rightIndex = (parentIndex * 2) + 2;

        while (true) {
            if (rightIndex < size() && compare(bestIndex, rightIndex)) {
                bestIndex = rightIndex;
            }
            if (bestIndex < size() && compare(parentIndex, bestIndex)) {
                swap(parentIndex, bestIndex)
                parentIndex = bestIndex;
                bestIndex = (parentIndex * 2) + 1;
                rightIndex = (parentIndex * 2) + 2;
            }
            else {
                break
            }
        }
    };


    let compare = function (i, j) {
        return maxHeap[i].freq < maxHeap[j].freq
    }

    let swap = function (i, j) {
        [maxHeap[i], maxHeap[j]] = [maxHeap[j], maxHeap[i]]
    }

    let size = function () {
        return maxHeap.length;
    }

    for (let char in count)
        enqueue({ val: char, freq: count[char] })

    while (size() > 0) {
        let item = dequeue();
        for (let i = 0; i < item.freq; i++) res += item.val
    }

    return res
}