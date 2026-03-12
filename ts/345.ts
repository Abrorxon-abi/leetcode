function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const arr = [];
  const splited = s.split("");
  let j = 0;

  for (let i = 0; i < splited.length; i++) {
    if (vowels.includes(splited[i])) {
      arr.push(splited[i]);
    }
  }

  arr.reverse();

  for (let i = 0; i < splited.length; i++) {
    if (vowels.includes(splited[i])) {
      splited[i] = arr[j];
      j++;
    }
  }

  return splited.join("");
}
