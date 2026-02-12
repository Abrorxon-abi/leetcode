function reverseByType(s: string): string {
  const letters = s
    .match(/[a-zA-Z]+/g)
    ?.join("")
    .split("")
    .reverse();
  const symbols = s
    .match(/[^a-zA-Z]+/g)
    ?.join("")
    .split("")
    .reverse();
  let newStr = "";
  let c1 = 0;
  let c2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-Z]+/g)) {
      newStr += letters?.[c1];
      c1++;
    } else {
      newStr += symbols?.[c2];
      c2++;
    }
  }

  return newStr;
}
