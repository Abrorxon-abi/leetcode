function garbageCollection(garbage: string[], travel: number[]): number {
  const GLASS = "G";
  const PAPER = "P";
  const METAL = "M";

  let timeToTakeGarbage = 0;
  let timeToGoHome = 0;
  let lastGlass = 0;
  let lastPaper = 0;
  let lastMetal = 0;

  for (let i = 0; i < garbage.length; i++) {
    timeToTakeGarbage += garbage[i].length;

    if (garbage[i].includes(GLASS)) {
      lastGlass = i;
    }
    if (garbage[i].includes(PAPER)) {
      lastPaper = i;
    }
    if (garbage[i].includes(METAL)) {
      lastMetal = i;
    }
  }

  for (let i = 0; i < travel.length; i++) {
    if (i < lastGlass) timeToTakeGarbage += travel[i];
    if (i < lastPaper) timeToTakeGarbage += travel[i];
    if (i < lastMetal) timeToTakeGarbage += travel[i];
  }

  return timeToGoHome + timeToTakeGarbage;
}
