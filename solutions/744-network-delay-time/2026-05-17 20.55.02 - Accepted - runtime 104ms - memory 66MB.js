/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let adjList = Array.from({ length: n + 1 }, () => []);
    let dist = Array(n+1).fill(Infinity);
    dist[k] = 0;
    let minHeap = [[0, k]]

    for (let [u, v, w] of times)
        adjList[u].push([v, w])

    while (minHeap.length > 0) {
        minHeap.sort((a, b) => b[0] - a[0])
        let [d, node] = minHeap.pop()
        if (d > dist[node]) continue;
        for (let [neighbor, w] of adjList[node]) {
            if (dist[node] + w < dist[neighbor]) {
                dist[neighbor] = dist[node] + w;
                minHeap.push([dist[neighbor], neighbor])
            }
        }
    }

    let res = Math.max(...dist.slice(1))
    return res === Infinity ? -1 : res
};