/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const folders = folder.sort();
    const results =[folders[0]]

   for(var i=1; i<folders.length; i++){
    if(!(folders[i].startsWith(results[results.length-1]+'/')))
        results.push(folders[i])
   }

   return results;
};