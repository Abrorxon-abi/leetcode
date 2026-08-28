struct Solution;

impl Solution {
    pub fn max_product(n: i32) -> i32 {
        let mut max = 0;
        let arr: Vec<char> = n.to_string().chars().collect();

        for i in 0..arr.len() {
            for j in i + 1..arr.len() {
                if max < (arr[i].to_digit(10).unwrap() * arr[j].to_digit(10).unwrap()) {
                    max = arr[i].to_digit(10).unwrap() * arr[j].to_digit(10).unwrap()
                }
            }
        }

        max as i32
    }
}

fn main() {
    let result = Solution::max_product(124);
    println!("{}", result);
}
