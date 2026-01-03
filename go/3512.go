package leetcode

func minOperations(nums []int, k int) int {
	sum := 0
	for _, val := range nums {
		sum += val
	}

	return sum % k
}
