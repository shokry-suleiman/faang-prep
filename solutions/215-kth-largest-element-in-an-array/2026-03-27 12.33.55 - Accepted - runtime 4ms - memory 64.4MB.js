/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    //to handle minus values inside nums array
    let offest = 10000;
    //as nums[i] range from -10000 to 10000
    let countArr = new Int32Array(20001);
    for (let num of nums)
        countArr[num + offest]++;

    let remaining = k

    for (let i = 20000; i >= 0; i--) {
        remaining -= countArr[i]
        if (remaining <= 0)
            return i - offest

    }

};