/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   let arr = [...digits];
    let carry = 0;
    if(arr[arr.length - 1] <9){
        arr[arr.length - 1] =  arr[arr.length - 1] + 1;
    }else {
        for(let i =arr.length -1; i >=0; i--){
            if(arr[i] == 9) {
                arr[i] =0;
                carry = 1;
            } else if(carry ){
                arr[i] = arr[i] + 1;
                carry =0;
                break;
            }
        }
    }
    
    if(carry && arr[0] ==0){
        arr = [ 1,...arr]
    }else if(carry && arr[0] > 0) {
        ++arr[0];
    }

    return arr;
};