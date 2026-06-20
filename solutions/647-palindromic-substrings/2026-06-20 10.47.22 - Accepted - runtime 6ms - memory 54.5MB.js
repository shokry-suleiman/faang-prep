/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length;
    let count=0;
    
    var expand = function(i,j){
        while(i>=0 && j<n && s[i]==s[j]){
            count++;
            i--;
            j++
        }
    }

    for(let i=0; i<n;i++){
        expand(i,i);
        expand(i,i+1)
    }

    
    return count
};