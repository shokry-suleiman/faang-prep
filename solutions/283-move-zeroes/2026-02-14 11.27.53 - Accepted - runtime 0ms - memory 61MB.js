/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
   let left =0;
   for(let right =0; right < nums.length; right++){

    if(nums[right] !=0) {
        if(left != right ){
            nums[left] = nums[right]
            nums[right] =0;
        }
                    left++

    }
   }
};