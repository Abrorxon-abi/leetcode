function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let acc = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    const box = boxTypes[i];
    if (truckSize > box[0]) {
      acc += box[1] * box[0];
      truckSize -= box[0];
    } else {
      acc += truckSize * box[1];
      return acc;
    }
  }

  return acc;
}
