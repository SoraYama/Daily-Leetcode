/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numSet = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    if(digits.length === 0) { return [] }
    let rtn = numSet[digits[0]]
    let s = digits.substr(1)
    s.split("").forEach(digit=>{
        let tmp = []
        numSet[digit].forEach(letter=>{
            tmp = tmp.concat(rtn.map(item=>(item+letter)))
        })
        rtn = tmp
    })
    return rtn
};
