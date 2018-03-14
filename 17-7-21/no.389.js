/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash = [];
    for(let i = 0; i < 26; i++) {
        hash[i] = 0;
    }
    console.log(hash);
    for(let i = 0; i < s.length; i++) {
        hash[s.charAt(i).charCodeAt() - "a".charCodeAt()]++;
    }
        console.log(hash);

    for(let i = 0; i < t.length; i++) {
        hash[t.charAt(i).charCodeAt() - "a".charCodeAt()]--;
    }
        console.log(hash);

    for(let i = 0; i < hash.length; i++) {
        if(hash[i] === -1) {
            return String.fromCharCode(i+"a".charCodeAt());
        }
    }
    return "";
};

var s = "abasabqwe";
var t = "abasxabqwe";
console.log(findTheDifference(s, t));