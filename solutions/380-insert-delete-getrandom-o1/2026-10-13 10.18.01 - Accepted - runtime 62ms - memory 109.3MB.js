
var RandomizedSet = function () {
    this.set = {};
    this.array = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set[val] != undefined)
        return false;
    this.set[val] = this.array.length
    this.array.push(val)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.set[val] == undefined)
        return false;

    let rmIndx = this.set[val];
    let lastIndx = this.array.length - 1;
    this.array[rmIndx] = this.array[lastIndx]
    this.array.pop()
    this.set[this.array[rmIndx]] = rmIndx
    delete this.set[val]

    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let indx = Math.floor(Math.random() * this.array.length)
    return this.array[indx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */