/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let A = nums1
  let B = nums2
  if (nums1.length > nums2.length) {
    B = nums1
    A = nums2
  }
  const [m, n] = [A.length, B.length]
  let imin = 0
  let imax = m
  let half = Math.floor((m + n + 1) / 2)
  let leftMax
  let rightMin
  while (imin <= imax) {
    let i = Math.floor((imin + imax) / 2)
    j = half - i
    if (i < m && B[j-1] > A[i]) {
      imin = i + 1
    } else if (i > 0 && A[i-1] > B[j]) {
      imax = i - 1
    } else {
      if (i === 0) {
        leftMax = B[j-1]
      } else if (j === 0) {
        leftMax = A[i-1]
      } else {
        leftMax = Math.max(A[i-1], B[j-1])
      }
      if ((m + n) % 2 === 1) {
        return leftMax
      }
      if (i === m) {
        rightMin = B[j]
      } else if (j === n) {
        rightMin = A[i]
      } else {
        rightMin = Math.min(A[i], B[j])
      }

      return (leftMax + rightMin) / 2
    }
  }
};

const a = [1]
const b = [1,5,9]
console.log(findMedianSortedArrays(a, b))
