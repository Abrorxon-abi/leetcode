function countSeniors(details: string[]): number {
  let counter = 0;

  for (let i = 0; i < details.length; i++) {
    let age = Number(details[i].slice(11, 13));
    if (age > 60) counter++;
  }

  return counter;
}
