function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let counter = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && flowerbed[1] !== 1 && flowerbed[0] === 0) {
      counter++;
      flowerbed[i] = 1;
      continue;
    }

    if (
      i === flowerbed.length - 1 &&
      flowerbed[flowerbed.length - 2] === 0 &&
      flowerbed[i] === 0
    ) {
      counter++;
      flowerbed[i] = 1;
      continue;
    }

    let prev = flowerbed[i - 1];
    let next = flowerbed[i + 1];

    if (prev === 0 && next === 0 && flowerbed[i] === 0) {
      counter++;
      flowerbed[i] = 1;
    }
  }

  return counter >= n;
}
