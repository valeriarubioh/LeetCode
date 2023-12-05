# Problem 
- (https://leetcode.com/problems/two-sum/)
<br>

# My solution

### JavaScript
```
var twoSum = function(nums, target) {
    if(nums.length <2 || nums.length >10000 || target < -Math.pow(10, 9) || target > Math.pow(10, 9)){
        return [];
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }
    return result;
};
```

# Optimous solution
### Java
```
class Solution {
    public int[] twoSum(int[] nums, int target) {
        if (nums == null || nums.length < 2 || nums.length > 10000 || target < -Math.pow(10, 9) || target > Math.pow(10, 9)) {
            return new int[]{};
        }

        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                return new int[]{map.get(nums[i]), i};
            }    
            map.put(target - nums[i], i);
        }
        return new int[]{-1, -1};
    } 
}
```
### JavaScript
```
var twoSum = function(nums, target) {
    if (nums.length < 2 || nums.length > 10000 || target < -Math.pow(10, 9) || target > Math.pow(10, 9)) {
        return [];
    }

    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
};

```

