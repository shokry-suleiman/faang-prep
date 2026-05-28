/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dist = Array(n).fill(Infinity);
    dist[src]=0;

    for(let i=0; i<k+1; i++){
        let prev =[...dist];
        for(let [from,to,price] of flights){
            if(prev[from]+price<dist[to])
                dist[to]=prev[from]+price;
        }
    }

    return dist[dst]=== Infinity ? -1:dist[dst]
};