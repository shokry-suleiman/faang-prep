/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxLength =0;
    let start=0;

    for(let i=0; i< s.length; i++){
        const oddLen = expandCenter(s,i,i);
        const evenLen = expandCenter(s,i,i+1);
        const currentMax = Math.max(oddLen,evenLen);
        if(currentMax> maxLength){
            maxLength = currentMax;
            start = i - Math.floor((maxLength-1)/2)
        }
    }
    return s.substring(start,start+maxLength)
};
 
var expandCenter = (s,left,right) =>{
    while(left>=0 && right<s.length && s[left] == s[right]){
        left--;
        right++;
    }
    return right-left-1
}