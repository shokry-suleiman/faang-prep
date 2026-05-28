/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    //  function calcStairs(n, memo = {}) {
    //     if(n in memo)
    //         return memo[n]
    //     if (n == 1)
    //         return 1
    //     if (n == 2)
    //         return 2
        
    //     memo[n]= calcStairs(n - 1,memo) + calcStairs(n - 2,memo)
    //     return memo[n]
    // }

    // return calcStairs(n)

    if(n<=2)
        return n
    let first = 1
    let second = 2

    for(let i=3; i<=n; i++){
        let current = first + second;
        first = second
        second = current;
    }

    return second

};