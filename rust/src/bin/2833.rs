struct Solution;

impl Solution {
    pub fn furthest_distance_from_origin(moves: String) -> i32 {
        let mut l_count: i32 = 0;
        let mut r_count: i32 = 0;
        let mut space_count: i32 = 0;

        for i in moves.chars() {
            if i == 'L' {
                l_count += 1
            } else if i == 'R' {
                r_count += 1
            } else {
                space_count += 1
            }
        }

        l_count.abs_diff(r_count) as i32 + space_count
    }
}

fn main() {
    let result = Solution::furthest_distance_from_origin(String::from("L_RL__R"));
    println!("{}", result);
}
