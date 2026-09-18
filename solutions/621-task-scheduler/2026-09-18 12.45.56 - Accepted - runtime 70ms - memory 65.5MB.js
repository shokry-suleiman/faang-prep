/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let maxHeap = new MaxPriorityQueue()
    let count = {};
    let queue = [];
    let time = 0;
    for (let task of tasks)
        count[task] = (count[task] || 0) + 1;

    for (let key in count)
        maxHeap.enqueue(count[key])

    while (maxHeap.size() || queue.length) {
        time++;
        if (queue.length && queue[0][1] <= time) {
            let [task, _] = queue.shift();
            maxHeap.enqueue(task)
        }

        if (maxHeap.size()) {
            let task = maxHeap.dequeue();
            task--;
            if (task > 0) {
                queue.push([task, time + n + 1])
            }
        }
    }

    return time;
};