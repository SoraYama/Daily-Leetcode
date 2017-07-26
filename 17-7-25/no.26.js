/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 2) {
    return nums.length;
  }
  else {
    var cur = nums[0];
    var last = nums[nums.length - 1];
    var i = 0;
    while(nums[i+1] !== undefined) {
      if(nums[i] === nums[i+1]) {
        nums.splice(i, 1);
      } else {
        i++;
      }
    }
    console.log(nums);
    return nums.length;
  }
};
// console.log(removeDuplicates([1,1,2]));
var removeDuplicates2 = function(nums) {
   if(nums === null || nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    var count = 0;
    for(var i = 1 ; i < nums.length ; i++){
        if(nums[count] != nums[i]){
            nums[++count] = nums[i];
        }
    }    
    console.log(nums);
    count = count + 1;
    return count;
};
console.log(removeDuplicates([1,1,2,3]));