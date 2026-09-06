struct Solution;

impl Solution {
    pub fn sort_array_by_parity_ii(nums: Vec<i32>) -> Vec<i32> {
        let evens: Vec<i32> = nums.iter().copied().filter(|&n| n % 2 == 0).collect();
        let odds: Vec<i32> = nums.iter().copied().filter(|&n| n % 2 != 0).collect();

        let mut ans = Vec::with_capacity(nums.len());

        for i in 0..nums.len() / 2 {
            ans.push(evens[i]);
            ans.push(odds[i]);
        }

        ans
    }
}

fn main() {
    let result = Solution::sort_array_by_parity_ii(vec![4, 2, 5, 7]);
    println!("{:?}", result);
}
