/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let trie = {}
    for (let word of words) {
        let node = trie;
        for (let char of word) {
            if (!node[char])
                node[char] = {}
            node = node[char]
        }
        node.word = word;
    }
    let res = []
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[0].length; j++)
            isFound(board, i, j, trie, res)
    return res;
};


let isFound = function (board, i, j, node, res) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == '#')
        return;
    let char = board[i][j]
    if (!node[char])
        return;
    node = node[char]
    if (node.word) {
        res.push(node.word)
        node.word = null
    }
    board[i][j] = '#'
    isFound(board, i + 1, j, node, res)
    isFound(board, i - 1, j, node, res)
    isFound(board, i, j + 1, node, res)
    isFound(board, i, j - 1, node, res)
    board[i][j] = char;
}