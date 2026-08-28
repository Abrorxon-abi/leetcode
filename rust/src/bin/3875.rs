struct Solution;

impl Solution {
    pub fn uniform_array(_nums1: Vec<i32>) -> bool {
        true
    }
}

fn main() {
    let result = Solution::uniform_array(vec![2, 3]);
    println!("{}", result);
}
