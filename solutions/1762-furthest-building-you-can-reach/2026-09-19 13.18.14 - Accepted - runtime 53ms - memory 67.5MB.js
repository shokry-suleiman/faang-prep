/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    let maxHeap = new MaxPriorityQueue();

    for (let i = 0; i < heights.length; i++) {
        let diff = heights[i + 1] - heights[i];
        if(diff <=0) continue;
        bricks -= diff;
        maxHeap.enqueue(diff);
        if (bricks < 0) {
            if (ladders == 0)
                return i;
            ladders -= 1;
            bricks += maxHeap.dequeue();
        }
    }
    return heights.length - 1
};