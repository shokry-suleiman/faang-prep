/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    return fibMemo(n,{})
   
};

var fibMemo = function(n,map){
     if(n==0)
        return 0
    if (n <= 2)
        return 1
    if(map[n])
        return map[n]
    map[n]=fibMemo(n - 1,map) + fibMemo(n - 2,map)
    return map[n]
}