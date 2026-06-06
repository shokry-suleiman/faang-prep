
var MyQueue = function () {
    this.pushStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.pushStack.splice(0, 1)[0]
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.pushStack[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.pushStack.length)
        return false
    return true
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */