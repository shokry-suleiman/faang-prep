/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let b1 = a.split('');
    let b2 = b.split('');
    let result =[];
    let j = b1.length - 1;
    let k = b2.length - 1;
    let carry =0;
    while(j >= 0 && k >=0){
        let sum = (b1[j] * 1) + (b2[k] * 1);
        if(carry){
            sum += carry;
            carry =0;
        }
        if(sum == 3) {
            carry =1;
            result.push(1);
        }
        else if(sum == 2){
            carry =1;
            result.push(0);
        }else {
           result.push(sum)
        }


        j--;
        k--;
        debugger;
    }

    while(j >= 0){

        let sum = b1[j] * 1;
        if(carry){
            sum += carry;
            carry =0;

        }
        if(sum == 3) {
            carry =1;
            result.push(1);
        }else if(sum == 2){
            carry =1;
            result.push(0);
        }else {

           result.push(sum)
        }
        --j;
    }

    while( k >= 0) {
        let sum = b2[k] * 1;
        if(carry){
            sum += carry;
            carry =0;
        }
        if(sum == 3) {
            carry =1;
            result.push(1);
        }
        else if(sum == 2){
            carry =1;
            result.push(0);
        }else {
           result.push(sum)
        }
        --k;
    }
    result = result.reverse();
    if(carry) {
        result = [1, ...result]
    }
    return result.join('');
};