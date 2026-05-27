/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let fresh = 0;
    let q = []
    let minutes = 0;
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 2)
                q.push([i, j])
            if (grid[i][j] == 1)
                ++fresh
        }
    }

    while (q.length && fresh > 0) {
        let level = q.length
        for (let i = 0; i < level; i++) {
            let [rotR, rotC] = q.shift();
            for (let [dirR, dirC] of dir) {
                let gridR = dirR + rotR;
                let gridC = dirC + rotC;
                if (gridR >= 0 && gridR < grid.length && gridC >= 0 && gridC < grid[0].length && grid[gridR][gridC] == 1) {
                    grid[gridR][gridC] = 2
                    q.push([gridR, gridC])
                    fresh--;
                }
            }
        }
        minutes++
    }

    return fresh != 0 ? -1 : minutes
};
