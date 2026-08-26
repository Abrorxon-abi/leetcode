struct Solution;

impl Solution {
    pub fn rearrange_string(s: String, _x: char, y: char) -> String {
        let mut arr: Vec<char> = Vec::with_capacity(s.len());

        for i in s.chars() {
            if i == y {
                arr.insert(0, y);
            } else {
                arr.push(i);
            }
        }

        arr.iter().collect()
    }
}

fn main() {
    let result = Solution::rearrange_string(String::from("aabc"), 'a', 'c');
    println!("{}", result);
}
