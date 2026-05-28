/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this._minHeap = []
    for (let num of nums)
        this.add(num)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this._minHeap.length < this.k) {
        this._minHeap.push(val);
        this._shiftUp();
    } else if (val > this._minHeap[0]) {
        this._minHeap[0] = val
        this._shiftDown()
    }
    return this._peek();
};

KthLargest.prototype._shiftDown = function () {
    let nodeIndex = 0;
    let bestChild = (nodeIndex * 2) + 1;
    let rightChild = (nodeIndex * 2) + 2;

    while (true) {
        if (rightChild < this._minHeap.length && this._minHeap[rightChild] < this._minHeap[bestChild])
            bestChild = rightChild;
        if (bestChild < this._minHeap.length && this._compare(bestChild, nodeIndex)) {
            this._swap(bestChild, nodeIndex);
            nodeIndex = bestChild
            bestChild = (nodeIndex * 2) + 1;
            rightChild = (nodeIndex * 2) + 2;
        }
        else {
            break
        }
    }
}

KthLargest.prototype._shiftUp = function () {
    if (this._minHeap.length === 1)
        return
    let nodeIndx = this._minHeap.length - 1;
    let parentIndx = (nodeIndx - 1) >> 1
    while (parentIndx >= 0 && this._compare(nodeIndx, parentIndx)) {
        this._swap(nodeIndx, parentIndx)
        nodeIndx = parentIndx;
        parentIndx = (nodeIndx - 1) >> 1;
    }

};

KthLargest.prototype._compare = function (i, j) {
    return this._minHeap[i] < this._minHeap[j];
};

KthLargest.prototype._swap = function (i, j) {
    [this._minHeap[i], this._minHeap[j]] = [this._minHeap[j], this._minHeap[i]]
};

KthLargest.prototype._peek = function () {
    return this._minHeap.length ? this._minHeap[0] : -1
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */