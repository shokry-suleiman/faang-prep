/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp;
    let k;
    let arr;
    for(let i=0; i< nums.length; ++i) {
        k = i+1;
        temp = nums.slice(k).indexOf(nums[i]);
        while( temp != -1) {
            nums.splice(k+temp,1);
            temp = nums.slice(k).indexOf(nums[i]);
        }
        
    }
    return nums.length;
}; 