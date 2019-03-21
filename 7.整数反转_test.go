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

import "testing"

func Test_reverse(t *testing.T) {
	type args struct {
		x int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "case 0",
			args: args{
				x: 0,
			},
			want: 0,
		},
		{
			name: "case 1",
			args: args{
				x: 123,
			},
			want: 321,
		},
		{
			name: "case 2",
			args: args{
				x: -123,
			},
			want: -321,
		},
		{
			name: "case 3",
			args: args{
				x: 120,
			},
			want: 21,
		},
		{
			name: "case 4",
			args: args{
				x: 1120,
			},
			want: 211,
		},
		{
			name: "case 5",
			args: args{
				x: -1112,
			},
			want: -2111,
		},
		{
			name: "case 6",
			args: args{
				x: -10,
			},
			want: -1,
		},
		{
			name: "case 7",
			args: args{
				x: 1534236469,
			},
			want: 0,
		},
		{
			name: "case 8",
			args: args{
				x: -1534236469,
			},
			want: 0,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := reverse(tt.args.x); got != tt.want {
				t.Errorf("reverse() = %v, want %v", got, tt.want)
			}
		})
	}
}
