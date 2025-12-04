function countCollisions(directions: string): number {
  directions = directions.replace(/^L+/, "");
  directions = removeTrailingChars(directions, "R");
  directions = directions.replaceAll("S", "");

  return directions.length;
}

function removeTrailingChars(str: string, charsToRemove: string) {
  const escapedChars = charsToRemove.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`[${escapedChars}]+$`);
  return str.replace(regex, "");
}
