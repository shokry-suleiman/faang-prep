
var RandomizedSet = function () {
    this.map = {};
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map[val] != undefined)
        return false;
    this.map[val] = this.arr.length;
    this.arr.push(val)
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map[val]==undefined)
        return false;

    let removedIndex = this.map[val];
    let lastIndex = this.arr.length - 1;
    this.arr[removedIndex] = this.arr[lastIndex];
    this.map[this.arr[lastIndex]] = removedIndex
    this.arr.pop();
    delete this.map[val]
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let randomIndex = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */