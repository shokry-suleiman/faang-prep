/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length;
    let dp = new Array(n).fill(-1);
    return decoding(s, n, n - 1, dp);
};
var decoding = function (s, n, i, dp) {

    if (i < 0)
        return 1;

    if (s[i] === '0' && i == 0)
        return 0;

    if(dp[i] !=-1)
        return dp[i]
        
    dp[i] = 0;
    
    if (s[i] != '0')
        dp[i] += decoding(s, n, i - 1, dp)

    if (i >= 1) {
        let twoDigits = s.substring(i - 1, i + 1);
        if (twoDigits >= 10 && twoDigits <= 26)
            dp[i] += decoding(s, n, i - 2, dp)
    }

    return dp[i];
}