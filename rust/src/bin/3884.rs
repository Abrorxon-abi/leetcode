struct Solution;

impl Solution {
    pub fn first_matching_index(s: String) -> i32 {
        let mut idx = s.len() - 1;

        for (index, character) in s.chars().enumerate() {
            if character == s.chars().nth(idx).unwrap() {
                return index as i32;
            }

            if idx == 0 {
                return -1;
            }

            idx -= 1
        }

        -1
    }
}

fn main() {
    let result = Solution::first_matching_index(String::from("abcacbd"));
    println!("{}", result);

    let result = Solution::first_matching_index(String::from("abcdab"));
    println!("{}", result);
}
