/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let count = {}
    let maxHeap = new MaxPriorityQueue();
    let queue = [];
    let time = 0;

    for (let task of tasks)
        count[task] = (count[task] || 0) + 1;

    for (let key in count)
        maxHeap.enqueue(count[key])

    while (maxHeap.size() != 0 || queue.length != 0) {
        time++;

        if (maxHeap.size()) {
            let count = maxHeap.dequeue();
            count--;
            if (count > 0) {
                queue.push([count, time + n])
            }
        }
        if (queue.length != 0 && queue[0][1] == time) {
            let q = queue.shift()
            maxHeap.enqueue(q[0])
        }

    }

    return time;
};