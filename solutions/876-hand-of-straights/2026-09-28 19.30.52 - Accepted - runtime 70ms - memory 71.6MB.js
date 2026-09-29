/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize != 0)
        return false;

    let count = {};
    let minHeap = new MinPriorityQueue();

    for (let h of hand)
        count[h] = (count[h] || 0) + 1;

    for (let key in count)
        minHeap.enqueue(+key)

    while (minHeap.size()) {
        let min = minHeap.front();

        for (let i = min; i < min + groupSize; i++) {
            if (!count[i])
                return false;
            count[i] -= 1;
            if (count[i] == 0) {
                if (minHeap.front() != i)
                    return false
                minHeap.dequeue()
            }
        }
    }

    return true;
};  