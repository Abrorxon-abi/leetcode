struct Solution;

impl Solution {
    pub fn smallest_equal(nums: Vec<i32>) -> i32 {
        for i in 0..nums.len() {
            if (i as i32) % 10 == nums[i] {
                return i as i32;
            }
        }

        -1
    }
}

fn main() {
    let result = Solution::smallest_equal(vec![4, 3, 2, 1]);
    println!("{:?}", result);
}
