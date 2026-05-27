/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for(let i =0; i< columnTitle.length; i++){
       result +=  ((columnTitle.charCodeAt(columnTitle.length -1 -i) - 64) * Math.pow(26,i))
    }
    return  result
};