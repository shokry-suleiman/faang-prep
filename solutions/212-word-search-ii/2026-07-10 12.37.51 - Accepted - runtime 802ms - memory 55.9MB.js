/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let trie = {};
    let m = board.length;
    let n = board[0].length;
    res = [];
    for (let word of words) {
        let node = trie;
        for (let char of word) {
            if (!node[char])
                node[char] = {}
            node = node[char]
        }
        node.word = word;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            findWord(board, i, j, trie, res)
        }
    }
    return res;
};

var findWord = function (board, i, j, trie, res) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == '#')
        return
    let char = board[i][j];
    if (!trie[char])
        return;
    if (trie[char].word) {
        res.push(trie[char].word)
        trie[char].word=null
    }

    board[i][j] = '#'
    findWord(board, i + 1, j, trie[char], res);
    findWord(board, i - 1, j, trie[char], res);
    findWord(board, i, j + 1, trie[char], res);
    findWord(board, i, j - 1, trie[char], res);
    board[i][j] = char;
}