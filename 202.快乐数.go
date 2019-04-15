/*
 * @lc app=leetcode.cn id=202 lang=golang
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (52.38%)
 * Total Accepted:    15.3K
 * Total Submissions: 29.3K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数是不是“快乐数”。
 *
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到
 * 1。如果可以变为 1，那么这个数就是快乐数。
 *
 * 示例:
 *
 * 输入: 19
 * 输出: true
 * 解释:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 *
 */
package leetcode

import "fmt"

var unhappySet []int

func isHappy(n int) bool {
	if n <= 0 {
		return false
	}
	var sum int
	for n > 0 {
		current := n % 10
		sum += current * current
		n /= 10
	}
	if sum == 1 {
		return true
	}
	fmt.Printf("sum: %d, set: %v\n", sum, unhappySet)
	for _, num := range unhappySet {
		if num == sum {
			return false
		}
	}
	unhappySet = append(unhappySet, sum)
	return isHappy(sum)
}
