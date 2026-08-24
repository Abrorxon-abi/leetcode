use std::collections::HashSet;

struct Solution;

impl Solution {
    pub fn sum_counts(nums: Vec<i32>) -> i32 {
        let mut counter: i32 = 0;

        let n = nums.len();

        for i in 0..n {
            let mut set = HashSet::new();

            for j in i..n {
                set.insert(nums[j]);
                counter += (set.len() * set.len()) as i32;
            }
        }

        counter
    }
}

fn main() {
    let result = Solution::sum_counts(vec![1, 2, 1]);
    println!("{}", result);
}
