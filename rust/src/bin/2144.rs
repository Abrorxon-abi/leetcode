struct Solution;

impl Solution {
    pub fn minimum_cost(cost: Vec<i32>) -> i32 {
        let mut nums = cost.clone();
        nums.sort();

        let mut counter = 0;
        let mut helper = 0;

        for i in (0..nums.len()).rev() {
            if helper != 2 {
                counter += nums[i];
                helper += 1
            } else if helper == 2 {
                helper = 0;
            }
        }

        counter
    }
}

fn main() {
    let result = Solution::minimum_cost(vec![6, 5, 7, 9, 2, 2]);
    println!("{}", result);
}
