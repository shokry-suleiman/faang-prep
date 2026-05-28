/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let adjList = Array.from({ length: numCourses }, () => []);
    let indeg = new Array(numCourses).fill(0);
    let res = [];
    let q = [];
    for (let [a, b] of prerequisites) {
        adjList[b].push(a)
        indeg[a]++
    }

    for (let i = 0; i < numCourses; i++) 
        if (indeg[i] === 0) q.push(i)

    while (q.length > 0) {
        let curr = q.shift();
        res.push(curr);
        for (let neighbor of adjList[curr]) {
            indeg[neighbor]--;
            if (indeg[neighbor] == 0) q.push(neighbor)
        }
    }

    return res.length == numCourses ? res : [];
}