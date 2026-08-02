/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length;
    let dp = new Array(n).fill(-1);
    return ways(s, n - 1, dp)
};

var ways = function (s, index, dp) {

    if (s[index] == '0' && index == 0)
        return 0;

    if (index <= 0)
        return 1

    if (dp[index] != -1)
        return dp[index];

    dp[index] = 0;

    if (s[index] != '0')
        dp[index] += ways(s, index - 1, dp)

    if (index >= 1) {
        let start = index - 1;
        let end = index + 1;
        let two = Number(s.substring(start, end));

        if (two >= 10 && two <= 26)
            dp[index] += ways(s, index - 2, dp)
            
    }

    return dp[index]
}