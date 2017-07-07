/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanSet = {
        I: [1,1],
        V: [2,5],
        X: [3,10],
        L: [4,50],
        C: [5,100],
        D: [6,500],
        M: [7,1000]
    }
    let len = s.length;
    let res = 0;
    var i = 0;
    for(; i < len - 1; i++) {
        if(romanSet[s[i]][0] < romanSet[s[i+1]][0]) {
            res = res + romanSet[s[i+1]][1] - romanSet[s[i]][1];
            i++;
        }
        else {
            res += romanSet[s[i]][1];
        }
    }
    if(i !== len){
        res += romanSet[s[len - 1]][1];
    }
    return res;
};
var s = "XI";
console.log(romanToInt(s));
