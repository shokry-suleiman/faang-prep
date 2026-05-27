/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if(n==1 ){
        return true;
    }
    if(Math.log2(n) % 1 ==0) {
       return true;
    }
    return false
};
