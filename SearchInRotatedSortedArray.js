/*
@param {number[]} nums
@param {number} target
@return {number}
*/

var search = function(nums, target) {
  let l=0
  let r=nums.length-1;

    while(l<=r){
      let mid = Math.floor((l + r) / 2);

      if(nums[mid]===target){
        return mid;
      }
      if(nums[l]<= nums[mid]){ //significa que está ascendente
        if(nums[mid]>target && nums[l]<=target){
          r=mid-1;
        }else{
          l=mid+1;
        }
      }else{ //significa que está rotado
        if(nums[mid]<target&&nums[r]>=target){
          l=mid+1;
        }else{
          r=mid-1;
        }
      }
    }
    return -1;
};

let nums = [4,5,6,7,0,1,2], target = 0
//Output: 4
console.log(search(nums,target));

nums = [4,5,6,7,0,1,2], target = 3
//Output: -1
console.log(search(nums,target));

nums = [1], target = 0
//Output: -1
console.log(search(nums,target));
