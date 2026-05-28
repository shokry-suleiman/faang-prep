/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let base = "1"
    if (n == 1) return base
        base = countAndSay(n-1);
    return nextStep(base)

    function nextStep(str){
        let res ="";
        let count =0;
        let i=0;
        while(i<str.length){
            let count =1
            while(str[i]==str[i+1]){
                count++;
                i++
            }
            res = res+ String(count) + str[i]
            i++
        }
        return res;
    }

};

//  function pairsOfDigits(number) {
//         const result = [];
//         const subResult = [];
//         for (let i = 0; i < number.length; i++) {
//             let found = false;
//             for (let j = 0; j < result.length; j++) {
//                 if (result[j][0] == number[i] && j == result.length - 1) {
//                     result[j][1] += 1
//                     found = true;
//                 }
//             }
//             if (!found)
//                 result.push([+number[i], 1])
//         }
//         return result
//     }

//     function newNumber(arr) {
//         let str = ''
//         for (let [num1, num2] of arr) {
//             str += num2;
//             str += num1;
//         }
//         return str;
//     }
