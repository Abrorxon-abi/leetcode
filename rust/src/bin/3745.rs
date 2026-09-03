struct Solution;

impl Solution {
    pub fn maximize_expression_of_three(nums: Vec<i32>) -> i32 {
        let mut arr_copy = nums.clone();
        arr_copy.sort();

        let a = arr_copy[arr_copy.len() - 1];
        let b = arr_copy[arr_copy.len() - 2];
        let c = arr_copy[0];

        a + b - c
    }
}

fn main() {
    let result = Solution::maximize_expression_of_three(vec![-2, 0, 5, -2, 4]);
    println!("{:?}", result);
}
