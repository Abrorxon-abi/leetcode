struct Solution;

impl Solution {
    pub fn number_of_special_chars(word: String) -> i32 {
        let mut counter = 0;
        let mut lowercase_arr: Vec<u32> = vec![0; 26];
        let mut uppercase_arr: Vec<u32> = vec![0; 26];

        for ch in word.chars() {
            let ascii_val = ch as usize;

            if ascii_val >= 65 && ascii_val <= 90 {
                uppercase_arr[ascii_val - 65] = 1;
            } else {
                lowercase_arr[ascii_val - 97] = 1;
            }
        }

        for i in 0..lowercase_arr.len() {
            if lowercase_arr[i] == 1 && uppercase_arr[i] == 1 {
                counter += 1
            }
        }

        counter
    }
}

fn main() {
    let result = Solution::number_of_special_chars(String::from("aaAbcBC"));
    println!("{}", result);
}
