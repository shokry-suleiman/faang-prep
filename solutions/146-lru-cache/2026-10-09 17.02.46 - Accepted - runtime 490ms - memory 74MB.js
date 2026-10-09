var Node = function (val, key, prev, next) {
    this.val = val;
    this.key = key;
    this.prev = prev;
    this.next = next;
}

/**
 * @param {number} capacity
*/
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.left = new Node(0, 0, null, null);
    this.right = new Node(0, 0, null, null);
    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache[key])
        return -1;
    this.remove(this.cache[key])
    this.add(this.cache[key])
    return this.cache[key].val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache[key])
        this.remove(this.cache[key])
    this.cache[key] = new Node(value,key, null, null)
    this.add(this.cache[key])

    if (Object.keys(this.cache).length > this.capacity) {
        let lru = this.left.next;
        this.remove(lru);
        delete this.cache[lru.key]
    }
};

LRUCache.prototype.add = function (node) {
    let mru = this.right.prev;
    mru.next = node;
    node.prev = mru
    node.next = this.right;
    this.right.prev = node;
};


LRUCache.prototype.remove = function (node) {
    let next = node.next;
    let prev = node.prev;
    prev.next = next;
    next.prev = prev;
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */