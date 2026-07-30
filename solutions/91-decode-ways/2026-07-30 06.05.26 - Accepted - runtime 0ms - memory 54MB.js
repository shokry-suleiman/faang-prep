/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length;
    let dp = new Array(n).fill(-1);
    return countWays(s, n - 1, dp);
};

var countWays = function (s, index, dp) {
    
    if (index < 0)
        return 1

    if (s[index] === '0' && index == 0)
        return 0
    
    if(dp[index] !=-1)
        return dp[index]

    dp[index] = 0;

    if (s[index] != '0') {
        dp[index] += countWays(s, index - 1, dp)
    }

    if (index >= 1) {
        let two = Number(s.substring(index-1,index+1))
        if (two >= 10 && two <= 26)
            dp[index] += countWays(s, index - 2, dp)
    }

    return dp[index]
}