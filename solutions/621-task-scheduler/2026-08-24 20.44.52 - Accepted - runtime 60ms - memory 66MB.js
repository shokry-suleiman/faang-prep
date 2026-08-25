/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {

    let count = {};
    let time = 0;
    let maxHeap = new MaxPriorityQueue();
    let queue = [];

    for (let task of tasks)
        count[task] = (count[task] || 0) + 1;

    for (let key in count)
        maxHeap.enqueue(count[key])
    while (maxHeap.size() || queue.length > 0) {
        time++;


        if (queue.length > 0 && queue[0][0] > 0) {
            if (queue[0][1] <= time) {
                let task = queue.shift();
                maxHeap.enqueue(task[0])
            }
        }
        if (maxHeap.size()) {
            let freq = maxHeap.dequeue();
            freq--;
            if (freq > 0)
                queue.push([freq, n + time+1])
        }
    }

    return time;
};