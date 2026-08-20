struct Solution;

impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        if n.is_negative() {
            return false;
        }

        let binary = format!("{:b}", n);
        let mut ans: bool = false;

        for i in binary.chars() {
            let num = i.to_digit(10).unwrap();

            if num == 1 && ans != true {
                ans = true
            } else if num == 1 && ans == true {
                return false;
            }
        }

        ans
    }
}

fn main() {
    let result = Solution::is_power_of_two(16);
    println!("{}", result);

    let result = Solution::is_power_of_two(-2147483648);
    println!("{}", result);
}
