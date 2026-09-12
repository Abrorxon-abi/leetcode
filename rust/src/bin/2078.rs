struct Solution;

impl Solution {
    pub fn max_distance(colors: Vec<i32>) -> i32 {
        let mut max_range_1: i32 = 0;
        let mut max_range_2: i32 = 0;

        for i in (0..colors.len()).rev() {
            if colors[i] != colors[0] {
                max_range_1 = i as i32;
                break;
            }
        }

        for i in 0..colors.len() {
            if colors[i] != colors[colors.len() - 1] {
                max_range_2 = (colors.len() - 1 - i) as i32;
                break;
            }
        }

        if max_range_1 > max_range_2 {
            max_range_1
        } else {
            max_range_2
        }
    }
}

fn main() {
    let result = Solution::max_distance(vec![1, 1, 1, 6, 1, 1, 1]);
    println!("{}", result);

    let result = Solution::max_distance(vec![1, 8, 3, 8, 3]);
    println!("{}", result);
}
