/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let map = {}
    let maxHeap = new MaxPriorityQueue((item) => item.freq);
    let queue = [];
    let time = 0;

    for (let task of tasks)
        map[task] = (map[task] || 0) + 1;

    for (let task in map)
        maxHeap.enqueue({ task: task, freq: map[task] })

    while (maxHeap.size() != 0 || queue.length != 0) {
        time += 1;
         if (maxHeap.size()) {
            let item = maxHeap.dequeue();
            item.freq--
            if (item.freq > 0) {
                queue.push({ task: item.task, freq:item.freq , time: n + time })
            }
        }
        if (queue.length != 0 && queue[0].time == time) {
            let item = queue.shift()
                maxHeap.enqueue({ task: item.task, freq: item.freq })
        }
       
    }

    return time;
};