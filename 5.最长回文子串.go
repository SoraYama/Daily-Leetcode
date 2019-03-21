/*
 * @lc app=leetcode.cn id=5 lang=golang
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.81%)
 * Total Accepted:    44.6K
 * Total Submissions: 179.8K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

package leetcode

import (
	"math"
	"strings"
)

func longestPalindrome(s string) string {
	if s == "" {
		return ""
	}
	l := len(s)
	var t = []byte{'^', '#'}
	for i := 0; i < l; i++ {
		t = append(t, s[i], '#')
	}
	t = append(t, '$')
	tt := string(t)
	// fmt.Printf("tt: %s\n", tt)
	var mx, idx int
	var p = make([]int, len(tt)-1)
	p = append(p, -1)
	// fmt.Printf("p=%v\n", p)
	for i := 1; i < len(tt)-1; i++ {
		if i >= mx {
			p[i] = 1
		} else {
			p[i] = int(math.Min(float64(mx-i), float64(p[2*idx-i])))
		}
		// fmt.Printf("i=%d, p[i]=%d\n", i, p[i])
		for tt[i+p[i]] == tt[i-p[i]] {
			// fmt.Printf("i+p[i]=%d, i-p[i]=%d\n", i+p[i], i-p[i])
			p[i]++
		}
		// fmt.Printf("after while - p[i]=%d\n", p[i])
		if mx < i+p[i] {
			mx = i + p[i]
			idx = i
		}
		// fmt.Printf("i=%d, p=%v, mx=%d, idx=%d\n", i, p, mx, idx)
	}
	maxLen, maxIdx := getMaxElem(p)
	// fmt.Printf("maxLen=%d, maxIdx=%d\n", maxLen, maxIdx)
	res := tt[maxIdx-maxLen+1 : maxIdx+maxLen-1]
	// fmt.Printf("tt=%s\n", res)
	res = strings.Replace(res, "#", "", -1)
	res = strings.Replace(res, "$", "", -1)
	res = strings.Replace(res, "^", "", -1)
	// fmt.Printf("res=%s\n", res)
	return res
}

func getMaxElem(p []int) (int, int) {
	var max, idx int
	// fmt.Printf("p in getMaxElem = %v\n", p)
	for i := 1; i < len(p)-1; i++ {
		if p[i] < 2 {
			continue
		}
		if max < p[i] {
			idx = i
			max = p[i]
		}
	}
	return max, idx
}
