/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    let y;
    x = x + '';
    x = x.split('');
    y = [...x];
    y.reverse();
    
    x = x.join('');
    y = y.join('');
    
    if( x===y) {
        return true;
    } else {
        return false;
    }
};