function generateTag(caption: string): string {
  const words = caption
    .trim()
    .split(" ")
    .map((word, idx) => {
      if (idx !== 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
    });

  return "#" + words.join("").split("").splice(0, 99).join("");
}
