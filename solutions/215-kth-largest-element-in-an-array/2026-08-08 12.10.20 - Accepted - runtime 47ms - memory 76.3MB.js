/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    this._k = k;
    this._minHeap = [];
    for (let num of nums)
        add(num);
    return peak()
};

var add = function (num) {
    if (this._minHeap.length < this._k) {
        this._minHeap.push(num)
        shiftUp();
    } else if (num > this._minHeap[0]) {
        this._minHeap[0] = num;
        shiftDown();
    }
    return peak();
}

var shiftUp = function () {
    let nodeIndex = this._minHeap.length - 1;
    let parentIndex = (nodeIndex - 1) >> 1;
    while (nodeIndex > 0 && compare(nodeIndex, parentIndex)) {
        swap(nodeIndex, parentIndex);
        nodeIndex = parentIndex;
        parentIndex = (nodeIndex - 1) >> 1;
    }
}

var shiftDown = function () {
    let nodeIndex = 0;
    let bestChild = (nodeIndex * 2) + 1;
    let rightChild = (nodeIndex * 2) + 2;
    while (true) {
        if (rightChild < this._minHeap.length && this._minHeap[rightChild] < this._minHeap[bestChild]) {
            bestChild = rightChild;
        }
        if (bestChild < this._minHeap.length && compare(bestChild, nodeIndex)) {
            swap(bestChild, nodeIndex);
            nodeIndex = bestChild;
            bestChild = (nodeIndex * 2) + 1;
            rightChild = (nodeIndex * 2) + 2;
        } else {
            break;
        }
    }
}

var compare = function (i, j) {
    return this._minHeap[i] < this._minHeap[j]
}

var swap = function (i, j) {
    [this._minHeap[i], this._minHeap[j]] = [this._minHeap[j], this._minHeap[i]]
}

var peak = function () {
    return this._minHeap[0];
}

