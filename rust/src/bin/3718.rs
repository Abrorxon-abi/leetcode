struct Solution;

impl Solution {
    pub fn missing_multiple(nums: Vec<i32>, k: i32) -> i32 {
        let mut ans = 0;

        loop {
            ans += k;

            if !nums.contains(&ans) {
                return ans;
            }
        }
    }
}

fn main() {
    let result = Solution::missing_multiple(vec![8, 2, 3, 4, 6], 2);
    println!("{:?}", result);
}
