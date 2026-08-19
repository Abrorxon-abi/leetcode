struct Solution;

impl Solution {
    pub fn check_good_integer(n: i32) -> bool {
        let mut digit_sum = 0;
        let mut square_sum = 0;

        for digit in n.to_string().chars() {
            let num = digit.to_digit(10).unwrap() as i32;
            digit_sum += num;
            square_sum += num * num;
        }

        if square_sum - digit_sum >= 50 {
            true
        } else {
            false
        }
    }
}

fn main() {
    let result = Solution::check_good_integer(1000);
    println!("{}", result);

    let result = Solution::check_good_integer(19);
    println!("{}", result);
}
