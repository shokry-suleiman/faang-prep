/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
     let result = [];
    for(let i=0;i<numbers.length;i++){
        let temp = target - numbers[i];
        if(numbers.indexOf(temp) != -1 && numbers.lastIndexOf(temp) > i){
            result = [i+1, numbers.lastIndexOf(temp)+1]
            break;
            
        }
    }
     return result;
};