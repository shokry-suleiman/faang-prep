/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n<2)
    return 0
    let result =0;
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let p = 2; p < Math.sqrt(n); p++) {
        if (isPrime[p]) {
            for (let multiply = p * p; multiply < n; multiply = multiply + p) {
                isPrime[multiply] = false;
            }
        }
    }
    for(let item of isPrime){
        if(item)
            ++result
    }
    return result
    
};