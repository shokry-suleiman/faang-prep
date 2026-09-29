/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    let count = {};
    let minHeap = new MinPriorityQueue();

    if (hand.length % groupSize != 0)
        return false;

    for (let h of hand)
        count[h] = (count[h] || 0) + 1;

    for (let key in count)
        minHeap.enqueue(+key)

    while (minHeap.size()) {
        let first = minHeap.front();
        for (let i = first; i < groupSize + first; i++) {
            if (!count[i])
                return false;
            count[i] = count[i] - 1;
            if (count[i] == 0) {
                if (i != minHeap.front())
                    return false
                minHeap.dequeue();
            }
        }

    }

    return true;
};