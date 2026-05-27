/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if(nums.length===0)
        return [-1,-1];
    let start = binarSearch(nums, 0, nums.length-1, target);
    let end = start;
    if(start ===-1)
        return [-1,-1]
    let tempStart;
    let tempEnd;
    while(start!=-1){
        tempStart = start;
        start= binarSearch(nums, 0, start-1, target)
    }
    start = tempStart
    while(end!=-1){
        tempEnd = end;
        end= binarSearch(nums, end+1, nums.length-1, target)
    }
    end =tempEnd
    return [start,end]

};

function binarSearch(nums, left, right, target) {
    let l = left
    let r = right
    while (l <= r) {
        let mid = (l + r) >> 1;
        if (nums[mid] == target)
            return mid
        else if (nums[mid] > target)
            r = mid - 1;
        else
            l = mid + 1
    }
    return -1
}