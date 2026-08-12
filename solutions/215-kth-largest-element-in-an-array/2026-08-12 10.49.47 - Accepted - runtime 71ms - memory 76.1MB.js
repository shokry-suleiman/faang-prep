/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let data = [];


    let enqueue = function (number) {
        if (data.length < k) {
            data.push(number);
            shiftUp();
        }
        else if (number > data[0]) {
            data[0] = number;
            shiftDown();
        }
    }

    let shiftUp = function () {
        if (data.length == 1)
            return

        let childIndex = size() - 1;
        let parentIndex = (childIndex -1) >> 1;

        while (parentIndex >= 0 && compare(childIndex, parentIndex)) {
            swap(childIndex, parentIndex);
            childIndex = parentIndex;
            parentIndex = (childIndex -1) >> 1;
        }

    }

    let shiftDown = function () {
        let parentIndex = 0;
        let bestChildIndex = parentIndex * 2 + 1
        let rightChildIndex = parentIndex * 2 + 2
        while (true) {
            if (rightChildIndex < size() && compare(rightChildIndex, bestChildIndex)) {
                bestChildIndex = rightChildIndex;
            }
            if (bestChildIndex < size() && compare(bestChildIndex, parentIndex)) {
                swap(bestChildIndex, parentIndex)
                parentIndex = bestChildIndex;
                bestChildIndex = parentIndex * 2 + 1
                rightChildIndex = parentIndex * 2 + 2
            } else {
                break;
            }

        }
    }

    let swap = function (i, j) {
        [data[i], data[j]] = [data[j], data[i]]
    }

    let compare = function (i, j) {
        return data[i] < data[j];
    }

    let size = function () {
        return data.length;
    }

    let peak = function () {
        return data[0];
    }

    for (let num of nums)
        enqueue(num)


    return peak()
};