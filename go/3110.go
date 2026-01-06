package leetcode

import "math"

func scoreOfString(s string) int {
	acc := 0

	for i := 0; i < len(s)-1; i++ {
		acc += int(math.Abs(float64(s[i]) - float64(s[i+1])))
	}

	return acc
}
