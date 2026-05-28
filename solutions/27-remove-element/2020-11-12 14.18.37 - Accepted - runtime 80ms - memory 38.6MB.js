/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let temp;
    while(temp !=-1) {
        temp = nums.indexOf(val);
        if(temp !=-1){
            nums.splice(temp,1);
        }
    }
};