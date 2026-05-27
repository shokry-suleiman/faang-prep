
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     if (strs.length <= 0 || strs.length > 200) {
        return'';
    }
    if(strs.length ==1) {
        return strs[0];
    }
    for(let i=0;i<strs.length;i++) {
        if (strs[i].toLocaleLowerCase() !== strs[i] )
        return;
         if(strs[i].length < 0 && strs[i].length > 200 )
        return;
    }
    console.log('stars',strs)
    let match ='';
    let stoper= String(strs[0]).length >= strs.length? strs[1].length : strs[0].length;
    let iter =0;
    while(iter < stoper  ) {
        if(strs[0].charAt(iter) == strs[1].charAt(iter)) 
            match+= strs[0].charAt(iter);
        ++iter;
    }
    let iter1=0;
    let value = '';
    let char;
    while( iter1 < match.length) {
        char ='';
        for(let i=0;i<strs.length;i++) {
            if(strs[i].charAt(iter1) == match.charAt(iter1)) {
                char = strs[i].charAt(iter1);
            }else {
                char = null
                break;
            }
        }
        
       if( char != null) {
           value += char;
       }
        ++iter1;
    }
   
   return value;

}