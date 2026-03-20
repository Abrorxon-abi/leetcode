function makeFancyString(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.at(-1) !== s[i] || stack.at(-2) !== s[i]) {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
