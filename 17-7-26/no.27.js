/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement1 = function(nums, val) {
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

var removeElement2 = function(nums, val) {
  for(var i = 0; i < nums.length; i++){
    if(nums[i] == val){
      nums.splice(i--, 1);
    }
  }
  return nums.length;
};