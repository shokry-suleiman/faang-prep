/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
     let temp = magazine.split("")
    for(let i=0;i<ransomNote.length;i++){
        if(temp.indexOf(ransomNote[i])==-1)
            return false;
            temp[temp.indexOf(ransomNote[i])]='-';
    }

    return true;
};
