/**
 * @param {number} key
 * @param {number} value
 * @param {number} prev
 * @param {number} next
 */
var Node = function (key, value, prev, next) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
};


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.left = new Node(0, 0, null, null);
    this.right = new Node(0, 0, null, null);
    this.left.next = this.right;
    this.right.prev = this.left;
    this.cache = {};
};

/** 
 * @param {Node} node
 */
LRUCache.prototype.remove = function (node) {
    let next = node.next;
    let prev = node.prev;
    prev.next = next;
    next.prev = prev;
};

/** 
 * @param {Node} node
 */
LRUCache.prototype.add = function (node) {
    let prev = this.right.prev;
    prev.next = node;
    node.next = this.right;
    this.right.prev = node;
    node.prev = prev
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache[key])
        return -1;
    this.remove(this.cache[key]);
    this.add(this.cache[key])
    return this.cache[key].value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (!this.cache[key]) {
        let newNode = new Node(key, value, null, null);
        this.cache[key] = newNode;
        this.add(this.cache[key])
    } else {
        this.cache[key].value = value;
        this.remove(this.cache[key]);
        this.add(this.cache[key])
    }


    if (Object.keys(this.cache).length > this.capacity) {
        let lru = this.left.next;
        this.remove(lru);
        delete this.cache[lru.key]
    }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */