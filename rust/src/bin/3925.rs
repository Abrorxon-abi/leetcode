struct Solution;

impl Solution {
    pub fn concat_with_reverse(nums: Vec<i32>) -> Vec<i32> {
        let mut arr: Vec<i32> = nums.clone();

        for n in nums.iter().rev() {
            arr.push(*n);
        }

        arr
    }
}

fn main() {
    let result = Solution::concat_with_reverse(vec![1, 2, 3]);
    println!("{:?}", result);
}
