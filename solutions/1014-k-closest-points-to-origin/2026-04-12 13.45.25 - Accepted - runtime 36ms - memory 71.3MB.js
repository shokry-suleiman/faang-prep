/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    heap = [];
    for (let point of points)
        insert(point)
    return heap
    function insert(val) {
        if (heap.length < k) {
            heap.push(val);
            shiftUp()
        } else if (dist(val) < dist(heap[0])) {
            heap[0] = val
            shiftDown()
        }
    }

    function shiftDown() {
        let nodeIndx = 0;
        let bestChild = (nodeIndx * 2) + 1;
        let rightChild = (nodeIndx * 2) + 2;
        while (true) {
            if (rightChild < heap.length && compare(heap[rightChild],heap[bestChild]))
                bestChild = rightChild;

            if (bestChild < heap.length && compare(heap[bestChild],heap[nodeIndx])) {
                swap(nodeIndx, bestChild)
                nodeIndx = bestChild;
                bestChild = (nodeIndx * 2) + 1;
                rightChild = (nodeIndx * 2) + 2;
            }
            else {
                break;
            }
        }


    }

    function shiftUp() {
        let nodeIndx = heap.length - 1;
        let parentIndx = (nodeIndx - 1) >> 1
        while (nodeIndx > 0 && compare(heap[nodeIndx], heap[parentIndx])) {
            swap(nodeIndx, parentIndx)
            nodeIndx = parentIndx;
            parentIndx = (nodeIndx - 1) >> 1
        }

    }

    function swap(i, j) {
        [heap[i], heap[j]] = [heap[j], heap[i]]
    }

    function compare(val1, val2) {
        return dist(val1) > dist(val2)
    }

    function dist(val) {
        return (val[0] * val[0]) + (val[1] * val[1])
    }
};