struct Solution;

impl Solution {
    pub fn are_numbers_ascending(s: String) -> bool {
        let digits: Vec<u32> = s
            .split_whitespace()
            .filter_map(|w| w.parse().ok())
            .collect();

        Self::is_strictly_increasing(&digits)
    }

    fn is_strictly_increasing<T: Ord>(v: &[T]) -> bool {
        v.windows(2).all(|w| w[0] < w[1])
    }
}

fn main() {
    let result = Solution::are_numbers_ascending(
        "1 box has 3 blue 4 red 6 green and 12 yellow marbles".to_string(),
    );
    println!("{:?}", result);
}
