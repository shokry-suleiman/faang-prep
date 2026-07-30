/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let n1 = word1.length;
    let n2 = word2.length;
    let dp = Array.from({ length: n2 + 1 }, () => new Array(n1 + 1).fill(0));

    let i = 1;
    while (i <= n1 || i <= n2) {
        if (i <= n1)
            dp[0][i] = i;
        if (i <= n2)
            dp[i][0] = i;
        i++;
    }

    for (let i = 1; i <= n2; i++) {
        for (let j = 1; j <= n1; j++) {
            if(word1[j-1]==word2[i-1]){
                dp[i][j]= dp[i-1][j-1]
            }else {
                dp[i][j]= Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1])+1
            }   
        }
    }
    return dp[n2][n1]
};