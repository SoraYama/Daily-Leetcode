/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let sortedArr = nums.sort( (a, b) => (a - b) );
    let minDiff = Infinity;
    let diff = 0;
    for(let i = 0; i < sortedArr.length - 2; i++) {
        for(let j = i + 1, k = sortedArr.length - 1; j < k; ) {
            diff = sortedArr[i] + sortedArr[j] + sortedArr[k] - target;
            if(diff === 0) {
                return target;
            } else {
                minDiff = Math.abs(diff) < Math.abs(minDiff) ? diff : minDiff;
                if(diff > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }
    }
    return minDiff + target;
};

console.log(threeSumClosest([0,0,0], 1));