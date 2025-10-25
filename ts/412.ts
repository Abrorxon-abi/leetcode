// Problem Statement: https://leetcode.com/problems/fizz-buzz/description/

function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, index) => index + 1).map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    }
    return `${num}`;
  });
}
