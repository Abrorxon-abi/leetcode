function isValid(s: string): boolean {
  const stack = [];

  const obj: Record<string, string> = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === obj[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length > 0 ? false : true;
}
