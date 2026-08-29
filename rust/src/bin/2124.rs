struct Solution;

impl Solution {
    pub fn check_string(s: String) -> bool {
        let mut seen_b = false;

        for i in s.chars() {
            if i == 'b' {
                seen_b = true
            }

            if seen_b && i == 'a' {
                return false;
            }
        }

        true
    }
}

fn main() {
    let result = Solution::check_string("aaabbb".to_string());
    println!("{}", result);
}
