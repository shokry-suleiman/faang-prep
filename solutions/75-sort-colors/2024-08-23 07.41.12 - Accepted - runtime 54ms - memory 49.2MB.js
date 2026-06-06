/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let sortedMap = new Map();
    for (let i = 0; i < nums.length; i++) sortedMap.set(i, nums[i]);
    let arr = [...sortedMap.values()];
    let i = 0;
    while (i < nums.length) {
        let min = Math.min(...arr);
        nums[i] = min;
        arr.splice(arr.indexOf(min), 1);
        i++;
    }
};