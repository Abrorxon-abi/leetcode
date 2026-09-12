struct Solution;

impl Solution {
    pub fn score_validator(events: Vec<String>) -> Vec<i32> {
        let mut ans = vec![0, 0];

        for i in events {
            if ans[1] == 10 {
                return ans;
            }

            if i == "W" {
                ans[1] += 1;
            } else if i == "WD" || i == "NB" {
                ans[0] += 1
            } else {
                ans[0] += i.parse::<i32>().unwrap();
            }
        }

        ans
    }
}

fn main() {
    let result = Solution::score_validator(vec![
        "1".to_string(),
        "4".to_string(),
        "W".to_string(),
        "6".to_string(),
        "WD".to_string(),
    ]);
    println!("{:?}", result);
}
