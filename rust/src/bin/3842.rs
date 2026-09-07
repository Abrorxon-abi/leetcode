struct Solution;

impl Solution {
    pub fn toggle_light_bulbs(bulbs: Vec<i32>) -> Vec<i32> {
        let mut ans: Vec<i32> = Vec::new();

        for i in bulbs {
            let idx = ans.iter().position(|&x| x == i);

            match idx {
                Some(index) => {
                    ans.remove(index);
                }
                None => ans.push(i),
            }
        }

        ans.sort();
        ans
    }
}

fn main() {
    let result = Solution::toggle_light_bulbs(vec![10, 30, 20, 10]);
    println!("{:?}", result);
}
