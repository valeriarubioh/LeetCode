/*var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let max = 0;
  while(right<nums.length){
    if(nums[right]==0){
      k--;
    }
    if(k < 0){
      if(nums[left]==0){
        k++;
      }
      left++;
    }
    right++;
    max = Math.max(max, right-left);
  }
  return max;
};
*/
var longestOnes = function (nums, k) {
  let windowStart = 0;
  let zerosSeen = 0;
  let maxLength = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    // Update zerosSeen counter and move windowStart if needed
    if (nums[windowEnd] === 0) {
      zerosSeen++;
      while (zerosSeen > k) {
        if (nums[windowStart] === 0){
          zerosSeen--;
        }
        windowStart++;
      }
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};


let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2;
//Output: 6
console.log(longestOnes(nums,k));

nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3;
//Output: 10
console.log(longestOnes(nums,k));
