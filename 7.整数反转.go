/*
 * @lc app=leetcode.cn id=7 lang=golang
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.99%)
 * Total Accepted:    97K
 * Total Submissions: 303K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
package leetcode

import (
	"math"
	"strconv"
	"strings"
)

func reverse(x int) int {
	s := strconv.Itoa(x)
	negFlag := false
	if strings.HasPrefix(s, "-") {
		negFlag = true
		s = s[1:]
	}
	length := len(s)
	// fmt.Printf("s: %v\n", s)
	var reversed = []byte(s[:])
	// fmt.Printf("reversed: %v\n", reversed)
	sByte := []byte(s)
	// fmt.Printf("sByte: %v\n", sByte)
	for i := 0; i <= length/2; i++ {
		// fmt.Printf("i: %d\n", i)
		// fmt.Printf("length: %d\n", length)
		reversed[i] = sByte[length-i-1]
		reversed[length-i-1] = sByte[i]
	}
	var r, _ = strconv.Atoi(string(reversed))
	revInt := int64(r)
	if negFlag && revInt > math.MaxInt32 || !negFlag && revInt > math.MaxInt32-1 {
		return 0
	}
	if negFlag {
		return int(revInt) * -1
	}
	return int(revInt)
}

// func reverse(x int) int {
// 	rev := 0
// 	for x != 0 {
// 		pop := x % 10
// 		x /= 10
// 		if rev > math.MaxInt32/10 || (rev == math.MaxInt32/10 && pop > 7) {
// 			return 0
// 		}
// 		if rev < math.MinInt32/10 || (rev == math.MaxInt32/10 && pop < -8) {
// 			return 0
// 		}
// 		rev = rev*10 + pop
// 	}
// 	return rev
// }
