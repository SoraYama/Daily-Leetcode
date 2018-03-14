/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let sorted = nums.sort((a, b) => (a-b));
    // console.log(sorted);
    let len = sorted.length;
    var res = [];
    if(len <= 3) return res;
    let i = 0, j, k, l = len - 1;
    
    while(i <= len - 3) {
        console.log("i:", i);
        if(i > 0 && (sorted[i] == sorted[i-1])) {
            i++;
            console.log("i=i-1 continue");
            continue;
        }
        l = len - 1;
        while(l >= i + 3) {
            console.log("l:", l);
            if(l < len - 1 && (sorted[l] == sorted[l+1])) {
                l--;
                console.log("l=l+1 continue");
                continue;
            }
            j = i + 1;
            k = l - 1;
            while(j < k) {
                console.log("j:", j, "k:", k);
                let dum = sorted[i] + sorted[j] + sorted[k] + sorted[l] - target;
                if(dum === 0) {
                    res.push([sorted[i], sorted[j], sorted[k], sorted[l]]);
                    console.log("push: ",[sorted[i], sorted[j], sorted[k], sorted[l]]);
                    j++;
                    k--;
                    while(j < k && sorted[j] == sorted[j - 1]) {
                        j++;
                    }
                    while(j < k && sorted[k] == sorted[k + 1]) {
                        k--;
                    }
                } else if(dum < 0) {
                    j++;
                } else if(dum > 0) {
                    k--;
                }
            }
        l--;
        }
    i++;
    }
    return res;
};
console.log(fourSum([1,-2,-5,-4,-3,3,3,5],-11));