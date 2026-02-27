function wateringPlants(plants: number[], capacity: number): number {
  let steps = 0;
  let water = capacity;

  for (let i = 0; i < plants.length; i++) {
    if (water < plants[i]) {
      water = capacity;
      water -= plants[i];
      steps += 2 * i + 1;
    } else {
      steps++;
      water -= plants[i];
    }
  }

  return steps;
}
