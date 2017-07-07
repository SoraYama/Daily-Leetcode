No. 17: Letter Combinations of a Phone Number
================
## Description
Given a digit string, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below.

![Phone Pad](phonePad.png)
```
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```
* URL: [Click me](https://leetcode.com/problems/letter-combinations-of-a-phone-number/#/description)
* Difficulty: <font color="#FF7F00">Medium </font> <!-- Green:#90EE90 Red:#FF0000 Orange: #FF7F00 -->

Note:
> Although the above answer is in lexicographical order, your answer could be in any order you want.
-------------
## My solution (M)
```javascript
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
```
![RunTime](no.17.png "Awsome")
-------------
## Thinking
1. So neat that I don't want to paste code of RTM No.1;
2. `forEach()` & `concat()` & `map()` of `Array` are so important and functional;
3. Learnt usage of `split` & `substr`;
4. DFS & BFS can work in this problem, but traversal is the basic function. By the way, DFS is used in my solution imperceptibly.
