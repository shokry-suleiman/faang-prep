/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (find(board, i, j, 0, word))
                return true
        }
    }
    return false;
};

var find = function (board, i, j, indx, word) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == '#' || board[i][j] != word[indx])
        return false;
    if(indx == word.length-1)
        return true
    let char = board[i][j]
    board[i][j] = '#'
    if (find(board, i + 1, j, indx + 1, word) ||
        find(board, i - 1, j, indx + 1, word) ||
        find(board, i, j + 1, indx + 1, word) ||
        find(board, i, j - 1, indx + 1, word)) {
        board[i][j] = char;
        return true
    }
    board[i][j] = char;
    return false;
}