/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n= coins.length;
    let dp =  Array.from({length:n},()=> new Array(amount+1).fill(Infinity));

    for(let i=0; i<n;i++)
        dp[i][0]=0;
    
    for(let i=0;i<n;i++){
        for(let j=1; j<=amount; j++){
            if(i>0)
                dp[i][j]= dp[i-1][j]
                
            if(j>= coins[i]){
                dp[i][j]= Math.min(dp[i][j], dp[i][j-coins[i]]+1)
            }
        }
    }
    return dp[n-1][amount] ==Infinity ? -1 : dp[n-1][amount] 
};