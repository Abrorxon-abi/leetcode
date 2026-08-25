struct Solution;

impl Solution {
    pub fn is_adjacent_diff_at_most_two(s: String) -> bool {
        let chars: Vec<char> = s.chars().collect();

        for i in 0..chars.len() - 1 {
            let n1 = chars[i].to_digit(10).unwrap();
            let n2 = chars[i + 1].to_digit(10).unwrap();

            if n1.abs_diff(n2) > 2 {
                return false;
            }
        }

        true
    }
}

fn main() {
    let result = Solution::is_adjacent_diff_at_most_two(String::from("139"));
    println!("{}", result);
}
