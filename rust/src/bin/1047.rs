struct Solution;

impl Solution {
    pub fn remove_duplicates(s: String) -> String {
        let mut stack: Vec<char> = Vec::with_capacity(s.len());

        for i in s.chars() {
            if let Some(&last) = stack.last() {
                if i == last {
                    stack.pop();
                    continue;
                }
            }

            stack.push(i);
        }

        stack.into_iter().collect()
    }
}

fn main() {
    let result = Solution::remove_duplicates(String::from("abbaca"));
    println!("{:?}", result);
}
