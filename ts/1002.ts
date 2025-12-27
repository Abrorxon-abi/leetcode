function commonChars(words: string[]): string[] {
  let ans = words[0].split("");

  for (let i = 1; i < words.length; i++) {
    let arr = words[i].split("");
    for (let j = ans.length; j >= 0; j--) {
      if (arr.indexOf(ans[j]) !== -1) {
        arr.splice(arr.indexOf(ans[j]), 1);
      } else {
        ans.splice(j, 1);
      }
    }
  }

  return ans;
}
