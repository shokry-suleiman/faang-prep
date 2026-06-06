/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    //First Step Get Pivot
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1])
        i--;

    //Find the successor
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i])
            j--;
        swap(nums, i, j)

    }

    //reset
    reverse(nums, i + 1, nums.length - 1)

};

var reverse = function (arr, start, end) {
    while (start < end) {
        swap(arr, start, end)
        start++
        end--
    }
}

var swap = function (arr, first, second) {
    [arr[first], arr[second]] = [arr[second], arr[first]]
}

