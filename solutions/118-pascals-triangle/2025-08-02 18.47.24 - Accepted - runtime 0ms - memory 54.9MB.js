/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const basic = [[1], [1, 1]]
    const result = [];

    for (let i = 0; i < numRows; i++) {
        if (i == 0) {
            result.push(basic[i])
        } else if (i == 1) {
            result.push(basic[i])
        } else {
            const res = new Array(i + 1);
            res[0] = 1;
            res[i] = 1;
            let k = 1;
            for (let j = 0; j < i - 1; j++) {
                res[k] = result[i - 1][j] + result[i - 1][j + 1];
                k = k + 1;
            }
            result.push(res)

        }

    }

    return result;
};