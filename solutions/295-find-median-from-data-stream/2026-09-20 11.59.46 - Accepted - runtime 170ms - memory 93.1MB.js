
var MedianFinder = function () {
    this.largest = new MinPriorityQueue();
    this.smallest = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.smallest.enqueue(num);
    if (this.smallest.size() && this.largest.size() && (this.smallest.front() > this.largest.front())) {
        let number = this.smallest.dequeue();
        this.largest.enqueue(number);
    }
    if (this.smallest.size() > this.largest.size() + 1) {
        let number = this.smallest.dequeue();
        this.largest.enqueue(number)
    }
    if (this.largest.size()> this.smallest.size()) {
        let number = this.largest.dequeue();
        this.smallest.enqueue(number)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.smallest.size() > this.largest.size())
        return this.smallest.front();
    if (this.largest.size() > this.smallest.size())
        return this.largest.front();
    return ((this.smallest.front() + this.largest.front()) / 2)
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */