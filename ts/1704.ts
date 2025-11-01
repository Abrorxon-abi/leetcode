function halvesAreAlike(s: string): boolean {
  let counter1 = 0;
  let counter2 = 0;
  let splitted = s.split("");
  let arr1 = splitted.slice(s.length / 2);
  let arr2 = splitted.slice(0, s.length / 2);
  let regex = /^[aeiouAEIOU]$/;
  for (let c of arr1) {
    if (regex.test(c)) {
      counter1++;
    }
  }

  for (let c of arr2) {
    if (regex.test(c)) {
      counter2++;
    }
  }

  return counter1 === counter2;
}
