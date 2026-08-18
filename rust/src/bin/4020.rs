struct Solution;

impl Solution {
    pub fn elevator_requests(_n: i32, requests: Vec<i32>) -> i32 {
        let mut counter = 0;
        let mut prev = 0;

        for i in requests {
            counter += (i - prev).abs();
            prev = i;
        }

        counter
    }
}

fn main() {
    let result = Solution::elevator_requests(5, vec![2, 1, 4, 3]);
    println!("{}", result);
}
