
var WordDictionary = function () {
    this._data = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this._data;
    for (let char of word) {
        if (!node[char])
            node[char] = {}
        node = node[char]
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this._search(word, 0, this._data)
};

WordDictionary.prototype._search = function (word, indx, trie) {

    if (word.length == indx)
        return trie.isEnd == true;
        
    let char = word[indx];

    if (char == '.') {
        for (let node in trie) {
            if (node == 'isEnd') continue
            if (this._search(word, indx + 1, trie[node])) return true
        }
    } else {
        if (!trie[char])
            return false;
        else
            return this._search(word, indx + 1, trie[char])
    }

    return false
}
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */