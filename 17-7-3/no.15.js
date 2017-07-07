/**
 * @param {number[]} nums
 * @return {number[][]}
 */
Array.prototype.qSort = function(){
  let len = this.length;
  if(len <= 1)
    return this;
  let pivot = [this[0]];
  let left = [];
  let right = [];
  for(let i = 1; i < len; i++){
    if(this[i] < pivot[0]){
      left.push(this[i]);
    }
    else{
      right.push(this[i]);
    }
  }
  return left.qSort().concat(pivot.concat(right.qSort()));
};

var threeSum = function(nums) {
    var len = nums.length;
    var res = [];
    if(len < 3) {
      return res;
    }
    nums = nums.qSort();
    for(var i = 0; i < len - 2; i++) {
      if(nums[i] > 0) {
        return res;
      }
      if(i > 0 && nums[i] === nums[i-1]) {
        continue;
      }
      for(var j = i + 1, k = len - 1; j < k;) {
        if(nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j] == nums[j - 1]) {
					  j++;
				  }
			  	while (j < k && nums[k] == nums[k + 1]) {
			  		k--;
			  	}
        } else if(nums[i] + nums[j] + nums[k] > 0) {
          k--;
        } else {
          j++;
        }
      }
    }
    return res;
};
console.log([-1, 0, 1, 2, -1, -4].qSort());
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
