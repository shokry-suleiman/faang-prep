/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {

    let minHeap = new MinPriorityQueue();

    for (let i = 0; i < heights.length - 1; i++) {

        let diff = heights[i + 1] - heights[i];
        if (diff <= 0) continue;

        minHeap.enqueue(diff);

        if (minHeap.size() > ladders) {
            let smallest = minHeap.dequeue();
            bricks -= smallest;
            if (bricks < 0) return i
        }
    }
    
    return heights.length - 1
};