/**
 * @param {number} n
 * @return {boolean}
 */

 var isPowerOfFour = function(n) {
     if(n==1 ){
         return true;
     }
     if((Math.log(n) / Math.log(4)) % 1 ==0) {
        return true;
    }
    return false;
};
