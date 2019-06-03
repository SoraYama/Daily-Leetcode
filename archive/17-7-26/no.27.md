No. 27: Remove Element
================
## Description
* Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

**Example:**
> Given input array nums = `[3,2,2,3]`, val = `3`

Your function should return length = 2, with the first two elements of nums being 2.
* URL: [Click me](https://leetcode.com/problems/remove-element/#/description)
* Difficulty: <font color="#90EE90">Easy</font> <!-- Green:#90EE90 Red:#FF0000 Orange: #FF7F00 -->
-------------
## My solution
```javascript
var removeElement = function(nums, val) {
    var s = nums.sort((a, b) => (a - b));
    var index = 0, len = 0;
    for(let i = 0; i < nums.length; i++) {
        if(s[i] === val) {
            index = i;
            len++;
            for(let j = i+1; s[j] === s[i]; j++) {
                len++;
            }
            break;
        }
    }
    s.splice(index, len);
    return s.length;
};
```
![Mama](no.27.png)
-------------
## Delightful version
```javascript
var removeElement = function(nums, val) {
  for(var i = 0; i < nums.length; i++){
    if(nums[i] == val){
      nums.splice(i--, 1);
    }
  }
  return nums.length;
};
```
-------------
## Thingking
* `++` & `--` will be very useful in some occasion.