/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let start = 0
    let end = matrix.length - 1
    let midRow = (start + end) >> 1;
    while (start <= end) {
        if (target >= matrix[midRow][0] && target <= matrix[midRow][matrix[0].length - 1])
            break;
        else if (matrix[midRow][0] > target) {
            end = midRow - 1
            midRow = (start + end) >> 1;
        }
        else {
            start = midRow + 1
            midRow = (start + end) >> 1;
        }
    }

    if (start > end)
        return false

    let left = 0
    let right = matrix[0].length - 1
    while (left <= right) {
        let midCol = (left + right) >> 1
        if (matrix[midRow][midCol] == target)
            return true;
        else if (matrix[midRow][midCol] > target)
            right = midCol - 1
        else
            left = midCol + 1
    }


    return false

};