package leetcode

func maxDepth(s string) int {
	max := 0
	acc := 0

	for i := 0; i < len(s); i++ {
		switch s[i] {
		case '(':
			acc++
			if acc > max {
				max = acc
			}
		case ')':
			acc--
		}
	}

	return max
}
