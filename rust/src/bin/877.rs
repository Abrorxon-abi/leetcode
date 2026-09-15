struct Solution;

impl Solution {
    pub fn stone_game(_piles: Vec<i32>) -> bool {
        true
    }
}

fn main() {
    let result = Solution::stone_game(vec![1, 3, 2, 4, 1]);
    println!("{:?}", result);
}
