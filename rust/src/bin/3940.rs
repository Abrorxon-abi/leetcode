struct Solution;

impl Solution {
    pub fn limit_occurrences(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut ans = Vec::with_capacity(nums.len());
        let mut counter = 0;

        for i in nums {
            if ans.last() != Some(&i) {
                ans.push(i);
                counter = 1;
            } else if counter < k {
                ans.push(i);
                counter += 1;
            }
        }

        ans
    }
}

fn main() {
    let result = Solution::limit_occurrences(vec![1, 1, 1, 2, 2, 3], 2);
    println!("{:?}", result);
}
