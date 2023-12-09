//Math.min(max left, max right) - h[i]>=0

//second option : maxL or maxR - h[i]

height = [0,1,0,2,1,0,1,3,2,1,2,1];

var trap = function(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  let maxRight = height[right];
  let maxLeft = height[left];
  while (left < right) {
    if (maxRight >= maxLeft) {
      left++;
      leftActualArea = maxLeft - height[left];
      if(leftActualArea>0){
        maxArea+=leftActualArea;
      }
      maxLeft = Math.max(maxLeft,height[left])
    } else {
      right--;
      rightActualArea = maxRight - height[right];
      if(rightActualArea>0){
        maxArea+=rightActualArea;
      }
      maxRight = Math.max(maxRight,height[right])
    }
  }
  return maxArea;
};

console.log("Area = ", trap(height));
