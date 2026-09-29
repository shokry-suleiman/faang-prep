/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalGas = gas.reduce((g, t) => g + t, 0);
    let totalCost = cost.reduce((c, t) => c + t, 0);
    let first = 0;
    let total = 0;

    if (totalGas < totalCost)
        return -1;

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        if (total < 0) {
            total = 0
            first = i + 1
        }
    }

    return first;
};