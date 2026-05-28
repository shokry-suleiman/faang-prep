/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let totalProfit = 0;
    let lowIndx = 0;
    let high = prices[0]
    let low = prices[0]
    while (lowIndx < prices.length) {
        if (prices[lowIndx] < low) {
            low = prices[lowIndx];
            high = prices[lowIndx];
        } else if (prices[lowIndx] > high) {
            high = prices[lowIndx]
        } 
        
        if(low< high){
            totalProfit += high - low;
            high = prices[lowIndx]
            low = prices[lowIndx];
        }
        
        
        lowIndx++;
    }
    return totalProfit;
};