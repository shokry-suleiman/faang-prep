/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let n = nums.length;
  let currMax= nums[0];
  let result = nums[0];

  for(let i=1; i<n;i++){
    currMax= Math.max(nums[i], nums[i]+currMax)
    result = Math.max(result,currMax)
  }
  return result;
};