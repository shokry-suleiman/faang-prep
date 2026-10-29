/** 
 * @param {number} key
 * @param {number} val
 * @param {Node} next
 * @param {Node} prev
 * @return {void} 
 */

var Node = function (key, val, next, prev) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
};

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
 * @param {Node} node 
 * @return {void}
 */
LRUCache.prototype.add = function (node) {
    node.prev = this.right.prev;
    node.prev.next = node;
    node.next = this.right;
    this.right.prev = node;

};

/** 
 * @param {Node} node 
 * @return {void}
 */
LRUCache.prototype.remove = function (node) {
    let prev = node.prev;
    let next = node.next;
    next.prev = prev
    prev.next = next;
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
    if (this.cache[key] !== undefined) {
        const node = this.cache[key];
        node.val = value;
        this.remove(node);
        this.add(node);
        return;
    }

    // Evict the LRU node before inserting a new key.
    if (Object.keys(this.cache).length >= this.capacity) {
        const lru = this.left.next;
        this.remove(lru);
        delete this.cache[lru.key];
    }

    const node = new Node(key, value, null, null);
    this.add(node);
    this.cache[key] = node;
};