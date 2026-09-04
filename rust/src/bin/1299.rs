struct Solution;

impl Solution {
    pub fn replace_elements(arr: Vec<i32>) -> Vec<i32> {
        if arr.len() == 1 {
            return [-1].to_vec();
        }

        let mut nums = Vec::with_capacity(arr.len());

        for i in 0..arr.len() {
            let mut max = -1;
            for j in (i + 1..arr.len()).rev() {
                max = if max < arr[j] { arr[j] } else { max }
            }
            nums.push(max);
        }

        nums
    }
}

fn main() {
    let result = Solution::replace_elements(vec![17, 18, 5, 4, 6, 1]);
    println!("{:?}", result);

    let result = Solution::replace_elements(vec![400]);
    println!("{:?}", result);
}
