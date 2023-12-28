class Solution {
    public int removeDuplicates(int[] nums) {
      int nonValid = 0;
      int start= 0;
      int med = 1;
      for(int end=1;end<nums.length;end++){
        if(nums[start]==nums[end]){
          nums[end]=-101;
          nonValid++;
        }else{
          int temp=nums[med];
          nums[med]=nums[end];
          nums[end]=temp;
          start++;
          med++;
        }
      }
      return nums.length - nonValid;
    }
}
