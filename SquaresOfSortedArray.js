/*
https://leetcode.com/problems/squares-of-a-sorted-array/description/

Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/
const nums = [-4,-1,0,3,10]
var sortedSquares = function(nums) {
  var result = new Array(nums.length);
  let i = result.length-1;
  let left = 0;
  let right = nums.length - 1;
  while(left<=right){
    if(Math.pow(nums[left],2) < Math.pow(nums[right],2)){
      result[i]=Math.pow(nums[right],2);
      right--;
      i--;
    }else{
      result[i]=Math.pow(nums[left],2);
      left++;
      i--;
    }
  }
  return result;
};

console.log(sortedSquares(nums));

