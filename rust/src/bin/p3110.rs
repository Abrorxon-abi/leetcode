struct Solution;

impl Solution {
    pub fn score_of_string(s: String) -> i32 {
        let mut counter: i32 = 0;
        let byte_vec: Vec<u8> = s.into_bytes();
        let mut prev: u8 = byte_vec[0];

        for i in byte_vec.iter().skip(1) {
            counter += i.abs_diff(prev) as i32;
            prev = *i;
        }

        counter
    }
}

fn main() {
    let str: String = String::from("hello");
    let result: i32 = Solution::score_of_string(str);
    println!("{:?}", result);
}
