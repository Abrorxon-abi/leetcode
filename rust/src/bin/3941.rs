struct Solution;

impl Solution {
    pub fn password_strength(password: String) -> i32 {
        let mut counter = 0;
        let mut arr: Vec<char> = password.chars().collect();
        arr.sort_unstable();
        arr.dedup();

        for i in arr {
            match i {
                'a'..='z' => counter += 1,
                'A'..='Z' => counter += 2,
                '0'..='9' => counter += 3,
                '!' | '@' | '#' | '$' => counter += 5,
                _ => {}
            }
        }

        counter
    }
}

fn main() {
    let result = Solution::password_strength("aA1!".to_string());
    println!("{:?}", result);
}
