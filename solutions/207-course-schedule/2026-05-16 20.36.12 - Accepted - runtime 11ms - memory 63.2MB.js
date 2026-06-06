/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let adjList = Array.from({ length: numCourses }, () => []);
    let state = new Array(numCourses).fill(0);
    for (let [a, b] of prerequisites)
        adjList[b].push(a);

    for (let i = 0; i < numCourses; i++)
        if (state[i] == 0 && !dfs(i, adjList, state)) return false;

    return true
};


function dfs(node, adjList, state) {
    state[node] = 1;
    for (let neighbor of adjList[node]) {
        if (state[neighbor] == 1) return false
        else if (state[neighbor] == 2) continue
        else if (state[neighbor] == 0 && !dfs(neighbor, adjList, state)) return false
    }
    state[node] = 2;
    return true;
}