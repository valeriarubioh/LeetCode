# Problem 
- (https://leetcode.com/problems/two-sum/)
<br>

# My solution

### JavaScript
- no maneja casos donde nums tenga solo números negativos
```
var maxSubArray = function(nums) {
    let max_current= 0;
    let max_global= nums[0];
    for(let i= 0;i<nums.length;i++){
        if(max_current+nums[i]>0){
            max_current=max_current+nums[i];
            if(max_global < max_current){
                max_global = max_current
            }
        }else{
            max_current=0;
        }
    }
    return max_global;
};
```

# Optimous solution
### Java
```
class Solution {
    public int maxSubArray(int[] nums) {
        int max=nums[0];
        for (int i = 1; i < nums.length; i++) {
            nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(nums[i], max);
        }
        return max;
    }
}
```
### JavaScript
```
var maxSubArray = function(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(nums[i], max);
    }
    return max;
};
```

