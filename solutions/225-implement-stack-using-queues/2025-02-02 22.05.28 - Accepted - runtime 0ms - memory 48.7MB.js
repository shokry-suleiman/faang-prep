
var MyStack = function () {
    MyStack.prototype.firstQueue = [];
    MyStack.prototype.secondQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    MyStack.prototype.firstQueue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    MyStack.prototype.secondQueue.push(MyStack.prototype.firstQueue.pop())
    return MyStack.prototype.secondQueue.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return MyStack.prototype.firstQueue[MyStack.prototype.firstQueue.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    if (MyStack.prototype.firstQueue.length == 0)
        return true
    return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */