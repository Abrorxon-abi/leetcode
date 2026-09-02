struct Solution;

impl Solution {
    pub fn unequal_triplets(nums: Vec<i32>) -> i32 {
        let mut counter = 0;

        for i in 0..nums.len() - 2 {
            for j in i + 1..nums.len() - 1 {
                for k in j + 1..nums.len() {
                    if nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k] {
                        counter += 1
                    }
                }
            }
        }

        counter
    }
}

fn main() {
    let result = Solution::unequal_triplets(vec![4, 4, 2, 4, 3]);
    println!("{:?}", result);
}
