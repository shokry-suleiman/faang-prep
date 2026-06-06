/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0);
    let s=[]
    for(let i=0; i< temperatures.length; i++){
        while(s.length>0 && temperatures[i]>temperatures[s[s.length-1]]){
            let popped = s.pop();
            ans[popped] = i-popped
        }
        s.push(i)
    }
    return ans
};