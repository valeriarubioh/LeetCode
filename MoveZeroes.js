/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]*/

var moveZeroes = function(nums) {
  let right = 1;
  let left=0;
  for (let index = 0; index < nums.length-1; index++) {
    if(nums[left]===0&&nums[right]!==0){
      let temp=nums[left];
      nums[left]=nums[right];
      nums[right]=temp;
      right++;
      left++;
    }else if(nums[left]===0&&nums[right]===0){
      right++;
    }else{
      right++;
      left++;
    }
  }
  return nums
};

nums = [0,1,0,3,12];
console.log(moveZeroes(nums));
