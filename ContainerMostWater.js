alturas = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var containerBetterArea = function (alturas) {
  let maxArea = 0;
  let left = 0;
  let right = alturas.length - 1;
  while (left < right) {
    const minHeight = Math.min(alturas[left], alturas[right]);
    const area = (right - left) * minHeight;
    if (area > maxArea) {
      maxArea = area;
    }
    if (alturas[left] > alturas[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

console.log("Maxima Area = ", containerBetterArea(alturas));
