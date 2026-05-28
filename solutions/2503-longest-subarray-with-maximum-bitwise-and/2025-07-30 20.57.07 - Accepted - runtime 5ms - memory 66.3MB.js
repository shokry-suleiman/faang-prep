/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    var res =0;
    var curr_max=0;
    var size =0;
    for(var num of nums){
        if(num>curr_max){
            curr_max= num;
            size =1;
            res= 0;
        }else if (num == curr_max){
            size = size + 1;
        }else {
           size=0
        }
        res = Math.max(res,size)
    }
    return res;
};