/*
 * @lc app=leetcode.cn id=9 lang=golang
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.02%)
 * Total Accepted:    84K
 * Total Submissions: 150K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */
package leetcode

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	var arr []int
	for x != 0 {
		pop := x % 10
		x /= 10
		arr = append(arr, pop)
	}
	for i := 0; i < len(arr)/2; i++ {
		if arr[i] != arr[len(arr)-1-i] {
			return false
		}
	}
	return true
}

// func isPalindrome(x int) bool {
// 	if x < 0 || x%10 == 0 && x != 0 {
// 		return false
// 	}
// 	var reversed int
// 	for x > reversed {
// 		reversed = reversed*10 + x%10
// 		x /= 10
// 	}
// 	return x == reversed || x == reversed/10
// }
