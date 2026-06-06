/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) 
        for (let j = 0; j < grid[0].length; j++) 
            if (grid[i][j] == 1)
                maxArea = Math.max(maxArea, dfs(grid, i, j))
    return maxArea;
};

var dfs = function (grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) 
        return 0;
    grid[row][col] = 0
    return 1 + dfs(grid, row - 1, col) + dfs(grid, row + 1, col) + dfs(grid, row, col - 1) + dfs(grid, row, col + 1)
}