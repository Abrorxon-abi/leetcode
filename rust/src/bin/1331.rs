use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn array_rank_transform(arr: Vec<i32>) -> Vec<i32> {
        let mut ans = Vec::with_capacity(arr.len());
        let mut obj: HashMap<i32, i32> = HashMap::new();
        let mut sorted_arr = arr.clone();
        sorted_arr.sort();
        sorted_arr.dedup();

        for (idx, item) in sorted_arr.iter().enumerate() {
            obj.entry(*item).or_insert(idx as i32 + 1);
        }

        for n in arr {
            ans.push(*obj.get(&n).unwrap());
        }

        ans
    }
}

fn main() {
    let result = Solution::array_rank_transform(vec![37, 12, 28, 9, 100, 56, 80, 5, 12]);
    println!("{:?}", result);
}
