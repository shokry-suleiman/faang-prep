/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits.length <=1) 
        return true
    let flag;
    let temp = [];
    for ( let i=0; i<bits.length-1; i++) {
//         if(bits[i] == 0 && temp.length == 0)
//             flag = true;
//         else if (bits[i] == 1 && temp.length == 0) {
//             flag = false;
//             temp.push(bits[i])
//         } else if (temp.length !=0) {
            
//         }
        if (temp.length ==0 ) {
            if ( bits[i] == 1) {
                temp.push(bits[i])
                flag = false;
            } else if (bits[i] == 0) {
                flag = true;
            }
        } else {
            temp.pop();
            flag = true;
        }
            
            
    }
    return flag;
};