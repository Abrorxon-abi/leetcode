struct Solution;

impl Solution {
    pub fn is_middle_element_unique(nums: Vec<i32>) -> bool {
        let n = nums[nums.len() / 2];
        let idx = nums.len() / 2;

        for (i, num) in nums.iter().enumerate() {
            if n == *num && idx != i {
                return false;
            }
        }

        true
    }
}

fn main() {
    let result = Solution::is_middle_element_unique(vec![1, 2, 3]);
    println!("{}", result);

    let result = Solution::is_middle_element_unique(vec![1, 2, 2]);
    println!("{}", result);
}
