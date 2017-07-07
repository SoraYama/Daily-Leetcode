No.9: Palindrome Number
================
## Description
* Determine whether an integer is a palindrome. Do this without extra space.
* URL: [Click me](https://leetcode.com/problems/palindrome-number/#/description)
* Defficulty: <font color="#90EE90"> Easy </font>

Some hints:
> * Could negative integers be palindromes? (ie, -1)
> * If you are thinking of converting the integer to string, note the restriction of using extra space.
You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
> * There is a more generic way of solving this problem.
-------------
## My solution
```javascript
var isPalindrome1 = function(x) {
    if(x < 0)
      return false;
    else{
        var xString = x.toString(10);
        var len = xString.length;
        var x2 = '';
        for(let i = 0; i < len; i++){
            x2 += xString.charAt(len - 1 - i);
        }
        if(xString === x2)
          return true;
        else
          return false;
    }
};
```
## Delightful version
```javascript
var isPalindrome = function(x) {

    if(x < 0) { return false; }
    var flip = 0;
    if(x > 0 && x % 10 === 0) {return false;}

    while(flip < x) {
        flip = flip * 10 + x % 10;
        x = parseInt(x / 10);
        console.log('**flip=' + flip);
        console.log('**x=' + x);
    }

    return x === flip || parseInt(flip / 10) === x;
};
```
## Thinking
The delightful version gives more thinkful code. It shows a method to divide every digit of a integer (back forward). I should try to get more idea from that. It just compare half of the origin number `x` and next half of it `flip`, and don't forget two *situations*:
> 1. The origin number length is odd;
> 2. Is even.

Sentence `    return x === flip || parseInt(flip / 10) === x` gives solution to 2 situations above.

