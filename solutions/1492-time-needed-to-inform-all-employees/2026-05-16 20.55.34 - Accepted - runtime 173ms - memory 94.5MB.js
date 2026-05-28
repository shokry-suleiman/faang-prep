/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    let adjList = Array.from({ length: n }, () => []);
    for (let i = 0; i < manager.length; i++)
        if (manager[i] != -1) adjList[manager[i]].push(i)
    return dfs(headID, adjList, informTime);
};

var dfs = function (node, adjList, informTime) {
    if (adjList[node].length == 0)
        return 0;

    let time = 0;
    for (let neighbor of adjList[node])
        time = Math.max(time, dfs(neighbor, adjList, informTime))

    return informTime[node] + time
}