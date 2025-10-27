// Problem Statement: https://leetcode.com/problems/flipping-an-image/description/

function flipAndInvertImage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image[i].length; j++) {
      image[i][j] === 0 ? (image[i][j] = 1) : (image[i][j] = 0);
    }
  }

  return image;
}
