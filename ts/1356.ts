function sortByBits(arr: number[]): number[] {
  let map = new Map();
  const sorted = [];

  for (let n of arr) {
    const binary = n.toString(2);
    let count = 0;

    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "1") count++;
    }

    if (map.has(count)) {
      map.get(count).push(n);
    } else {
      map.set(count, []);
      map.get(count).push(n);
    }
  }

  map = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));

  for (let arr of map.values()) {
    sorted.push(...arr.sort((a: number, b: number) => a - b));
  }

  return sorted;
}
