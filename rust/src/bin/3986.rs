struct Solution;

impl Solution {
    pub fn seconds_between_times(start_time: String, end_time: String) -> i32 {
        let mut counter = 0;
        let mut mul = 3600;

        for (index, _) in end_time.chars().enumerate().step_by(3) {
            let t1: String = end_time.chars().skip(index).take(2).collect();
            let t2: String = start_time.chars().skip(index).take(2).collect();

            let t1: i32 = t1.parse().unwrap();
            let t2: i32 = t2.parse().unwrap();

            counter += (t1 - t2) * mul;

            if index == 0 {
                mul = 60;
            } else if index == 3 {
                mul = 1;
            }
        }

        counter
    }
}

fn main() {
    let result = Solution::seconds_between_times("01:00:00".to_string(), "01:00:25".to_string());
    println!("{}", result);
}
