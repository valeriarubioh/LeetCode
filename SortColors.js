/* 
https://leetcode.com/problems/sort-colors/description/

Example 1:
Input: nums = [2,0,2,1,1,0] --> [0,0,2*,1*,1*,2]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1] --> [1,0,2]
Output: [0,1,2]
*/
// var sortColors = function(nums) {
//     let start=0;
//     let end= nums.length-1;
//     let middle=0;
//     while(middle!==end){
//       if(middle>start){
//         if(nums[middle]>nums[end]){
//           let temp=nums[end];
//           nums[end]=nums[middle]
//           nums[middle]=nums[temp]
//           end--;
//         }
//       }else if(nums[start]>nums[end]){
//         let temp=nums[end];
//         nums[end]=nums[start]
//         nums[start]=nums[temp]
//         end--;
//       }else{
//         middle++;
//       }
//     }
//     return nums;
// };



var sortColors = function(nums) {
  let start=0;
  let end= nums.length-1;
  let middle=0;
  let temp;
  while(middle <= end){

    if (nums[middle] == 0) {
      temp = nums[start];
      nums[start] = nums[middle];
      nums[middle] = temp;
      start++;
      middle++;
    } else if (nums[middle] == 1) {
      middle++;
    } else {
      temp = nums[end];
      nums[end] = nums[middle];
      nums[middle] = temp;
      end--;
    }
    console.log(nums)
  }
  return nums;
};


nums = [0,0,2,1,1,0,1,0,1,2]
console.log(sortColors(nums))
