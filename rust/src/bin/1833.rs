struct Solution;

impl Solution {
    pub fn max_ice_cream(costs: Vec<i32>, coins: i32) -> i32 {
        let mut ans = 0;
        let mut cash = coins;

        let mut sorted = costs.clone();
        sorted.sort();

        for i in sorted {
            if cash - i >= 0 {
                cash -= i;
                ans += 1
            } else {
                return ans;
            }
        }

        ans
    }
}

fn main() {
    let result = Solution::max_ice_cream(vec![1, 3, 2, 4, 1], 7);
    println!("{:?}", result);
}
