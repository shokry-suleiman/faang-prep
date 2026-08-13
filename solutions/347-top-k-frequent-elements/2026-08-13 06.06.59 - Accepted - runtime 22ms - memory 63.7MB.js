/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let priorityQueue = [];
    let map = {}
    for (let num of nums)
        map[num] = (map[num] || 0) + 1;

    var enqueue = function (element) {
        if (size() < k) {
            priorityQueue.push(element);
            shiftUp();
        } else if (element.freq > peak().freq) {
            priorityQueue[0] = element
            shiftDown()
        }
    }

    var shiftUp = function () {
        if (size() == 1)
            return
        let nodeIndex = size() - 1
        let parentIndex = (nodeIndex - 1) >> 1;

        while (parentIndex >= 0 && compare(parentIndex, nodeIndex)) {
            swap(parentIndex, nodeIndex)
            nodeIndex = parentIndex;
            parentIndex = (nodeIndex - 1) >> 1;
        }
    }

    var shiftDown = function () {
        let parentIndex = 0
        let bestIndex = parentIndex * 2 + 1
        let rightIndex = parentIndex * 2 + 2

        while (true) {
            if (rightIndex < size() && compare(bestIndex, rightIndex)) {
                bestIndex = rightIndex;
            }
            if (bestIndex < size() && compare(parentIndex, bestIndex)) {
                swap(parentIndex, bestIndex)
                parentIndex = bestIndex
                bestIndex = parentIndex * 2 + 1
                rightIndex = parentIndex * 2 + 2
            }
            else {
                break
            }
        }
    }

    var compare = function (i, j) {
        return priorityQueue[i].freq > priorityQueue[j].freq
    }

    var swap = function (i, j) {
        [priorityQueue[i], priorityQueue[j]] = [priorityQueue[j], priorityQueue[i]]
    }

    var peak = function () {
        return priorityQueue[0];
    }

    var size = function () {
        return priorityQueue.length;
    }

    for (key in map)
        enqueue({ val: +key, freq: map[key] })

    return priorityQueue.map(el => el.val)
};