/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let gasSum = gas.reduce((it, sum) => it + sum, 0);
    let costSum = cost.reduce((it, sum) => it + sum, 0)
    if (gasSum < costSum)
        return -1

    let index = 0;
    let total = 0;

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        if (total < 0) {
            index = i + 1;
            total = 0;
        }
    }
    return index
};