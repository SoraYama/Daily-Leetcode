No.12 : Integer to Roman
================
## Description
* Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
* URL: [Click me](https://leetcode.com/problems/integer-to-roman/#/description)
* Difficulty: <font color="#FF7F00">Medium </font>  <!-- Green:#90EE90 Red:#FF0000 Orange: #FF7F00 -->

Some hints:
> 1:I 5:V 10:X 50:L 100:C 500:D 1000:M
-------------
## My solution
```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var romanSet = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];
    var roman = romanSet[3][parseInt(num / 1000) % 10] + romanSet[2][parseInt(num / 100) % 10] + romanSet[1][parseInt(num / 10) % 10] + romanSet[0][num % 10];
    return roman;
};

```
-------------
## Delightful version
```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var dic = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var res = '';
    for(var i = 0; i < digits.length; i++) {
        var temp = parseInt(num / digits[i]);
        num %= digits[i];
        while(temp > 0) {
            res += dic[i];
            temp--;
        }
    }
    return res;
};

```
-------------
## Thinking
Quite easy, this question is a typical example of usage of enum type, which is able to solve reverting questions like this.
