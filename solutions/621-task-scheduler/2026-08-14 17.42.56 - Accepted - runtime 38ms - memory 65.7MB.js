/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let queue = [];
    let maxHeap = new MaxPriorityQueue();
    let count = {};
    let time = 0;

    for (let task of tasks)
        count[task] = (count[task] || 0) + 1;

    for (let key in count)
        maxHeap.enqueue(count[key])

    while (maxHeap.size() != 0 || queue.length !== 0) {
        time++;
        if (maxHeap.size()) {
            let task = maxHeap.dequeue();
            task--;
            if(task>0)
                queue.push([task, n + time])
        }
        if (queue.length !=0 && queue[0][1]==time) {
            let task = queue.shift();
            maxHeap.enqueue(task[0])
        }
    }

    return time
};