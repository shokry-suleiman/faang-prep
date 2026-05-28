/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
      let arr = s.split(' ');
      while(arr[arr.length - 1] == '')
        arr.pop();
      return arr[arr.length - 1].length;
};