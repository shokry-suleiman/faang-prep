/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const resultsArr = new Array(numRows)
    let indx = 0;
    let direction = 1;

    for (let char of s) {
        if (indx == 0) {
            if (!resultsArr[indx])
                resultsArr[indx] = []
            direction = 1
            resultsArr[indx].push(char)
            indx += 1;

        } else if (indx == resultsArr.length - 1) {
            direction = -1
            if (!resultsArr[indx]) {
                resultsArr[indx] = []
            }
            resultsArr[indx].push(char)
            indx = direction + resultsArr.length - 1
        } else {
            if (!resultsArr[indx])
                resultsArr[indx] = []
            resultsArr[indx].push(char)
            indx += direction
        }
    }
    let results = ''
    for (let charArry of resultsArr){
        if(charArry)
            results += charArry.join('')
    }
        
    return results
};