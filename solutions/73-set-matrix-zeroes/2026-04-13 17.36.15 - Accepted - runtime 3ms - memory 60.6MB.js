/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let firstRowZero = matrix[0].some(num => num == 0)
    let firstColZero = matrix.some(arr => arr[0] == 0)

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
    }

    if (firstRowZero) for (let j = 0; j < n; j++) matrix[0][j] = 0;
    if (firstColZero) for (let i = 0; i < m; i++) matrix[i][0] = 0;

};