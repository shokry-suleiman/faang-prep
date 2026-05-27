/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandsCount=0;
    for(let r=0;r<grid.length;r++){
        for(let c=0; c< grid[0].length;c++){
            if(grid[r][c] ==1){
                islandsCount++;
                checkNeigbours(grid,r,c)
            }
        }
    }
    return islandsCount;
};

var checkNeigbours = function(grid,r,c){
    if(r<0 || c<0 || r>=grid.length || c>=grid[0].length || grid[r][c]=='0'){
        return
    }
    grid[r][c]=0;
    checkNeigbours(grid,r,c+1)
    checkNeigbours(grid,r,c-1)
    checkNeigbours(grid,r-1,c)
    checkNeigbours(grid,r+1,c)
}