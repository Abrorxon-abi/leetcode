struct Solution;

impl Solution {
    pub fn digit_frequency_score(n: i32) -> i32 {
        let mut counter = 0;

        for i in n.to_string().chars() {
            counter += i.to_digit(10).unwrap() as i32
        }

        counter
    }
}

fn main() {
    let result = Solution::digit_frequency_score(101);
    println!("{:?}", result);
}
