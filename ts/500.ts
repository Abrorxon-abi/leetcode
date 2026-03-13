function findWords(words: string[]): string[] {
  const ans: string[] = [];
  const arr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      map.set(arr[i][j], i + 1);
    }
  }

  for (let i = 0; i < words.length; i++) {
    const lowerWord = words[i].toLowerCase();
    const first_letter = lowerWord[0];

    let valid = true;
    for (let j = 1; j < lowerWord.length; j++) {
      if (map.get(first_letter) !== map.get(lowerWord[j])) {
        valid = false;
        break;
      }
    }

    if (valid) ans.push(words[i]);
  }

  return ans;
}
