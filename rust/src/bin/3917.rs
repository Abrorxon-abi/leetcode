struct Solution;

impl Solution {
    pub fn count_opposite_parity(nums: Vec<i32>) -> Vec<i32> {
        let mut arr = vec![];

        for (index, item) in nums.iter().enumerate() {
            let mut counter = 0;

            for i in nums.iter().skip(index + 1) {
                if i % 2 == 0 && item % 2 != 0 {
                    counter += 1;
                } else if i % 2 != 0 && item % 2 == 0 {
                    counter += 1;
                }
            }

            arr.push(counter);
        }

        arr
    }
}

fn main() {
    let result = Solution::count_opposite_parity(vec![1, 2, 3, 4]);
    println!("{:?}", result);
}
