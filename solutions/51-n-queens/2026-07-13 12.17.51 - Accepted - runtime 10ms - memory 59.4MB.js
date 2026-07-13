/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let board = Array.from({ length: n }, () => new Array(n).fill('.'));
    let result = []
    solveQueen(board, 0, n, result)
    return result;
};

var solveQueen = function (board, r, n, res) {
    if (r == n) {
        res.push(board.map(it => it.join('')))
        return
    }
    for (let i = 0; i < n; i++) {
        if (isValid(board, r, i, n)) {
            board[r][i] = 'Q'
            solveQueen(board, r + 1, n, res)
            board[r][i] = '.'
        }
    }

    return res;
}

var isValid = function (board, r, c, n) {
    for (let i = 0; i < r; i++) {
        if (board[i][c] == 'Q') return false;
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'Q' && Math.abs(r - i) == Math.abs(c - j))
                return false
        }
    }
    return true
}