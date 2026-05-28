/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let result = []
    let q = []
    for (let i = 0; i < rows; i++) {
        let subArr = [];
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] == 0) {
                subArr[j] = 0
                q.push([i, j])
            } else {
                subArr[j] = Infinity
            }
        }
        result[i] = subArr
    }

    let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    while (q.length > 0) {
        let [i, j] = q.shift();

        for (let [dr, dc] of dir) {
            let nr = dr + i
            let nc = dc + j
            if (nr >= 0 && nr < result.length && nc >= 0 && nc < result[0].length && result[nr][nc] > result[i][j] + 1) {
                result[nr][nc] = result[i][j] + 1;
                q.push([nr, nc])
            }
        }

    }
    return result
};