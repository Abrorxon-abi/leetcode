struct Solution;

impl Solution {
    pub fn split_num(num: i32) -> i32 {
        let mut num1 = String::new();
        let mut num2 = String::new();
        let mut sorted_num: Vec<_> = num.to_string().chars().collect();
        sorted_num.sort();

        for (idx, item) in sorted_num.iter().enumerate() {
            if idx % 2 == 0 {
                num1.push(*item);
            } else {
                num2.push(*item);
            }
        }

        num1.parse::<i32>().unwrap() + num2.parse::<i32>().unwrap()
    }
}

fn main() {
    let result = Solution::split_num(4325);
    println!("{:?}", result);
}
