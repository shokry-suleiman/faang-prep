/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    if (s.length < 1 && s.length > 15) {
return
    }
    
    let exists = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let array = s.split('');
    array.map((char) => {
        if(exists.indexOf(char) === -1) {
            return;
        }
    });
    let symbols ={
       'I': 1,
      'V': 5,
      'X': 10,
       'L': 50,'C': 100,'D': 500, 'M':1000
    }
    let result = 0;
    for(let i=0;i<array.length-1;i++) {
        if(symbols[array[i]] >= symbols[array[i+1]]){
          result += symbols[array[i]]  ;
        }else {
        result += symbols[array[i]] * -1;
    }
    };
    result += symbols[array[array.length-1]];
    return result;
}

