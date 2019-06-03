/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var pref = strs[0];
    var i,j;
    for(i = 1; i < strs.length; i++) {
      for(j = 0; j < pref.length; j++) {
        if(strs[i][j] !== pref[j]) {
          pref = pref.slice(0,j);
          break;
        }
      }
      if(pref === '') {
          return pref;
      }
    }
    return pref;
};
var sa = ["avdwea","bavd","a"];
console.log(longestCommonPrefix(sa));
