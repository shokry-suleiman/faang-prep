/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] == '.') {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, r, c, num)) {
                        board[r][c] = `${num}`;
                        if (solveSudoku(board)) return true
                        board[r][c] = '.'
                    }
                }
                return false;

            }
        }
    }
    return true;
};

var isValid = function (board, r, c, num) {
    for (let i = 0; i < 9; i++)
        if (board[i][c] == num || board[r][i] == num) return false;

    let bor = Math.floor(r / 3) * 3;
    let boc = Math.floor(c / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + bor][j + boc] == num) return false
        }
    }
    return true
}