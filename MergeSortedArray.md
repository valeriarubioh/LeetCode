# Problem 
- (https://leetcode.com/problems/fizz-buzz/)
<br>

# My solution

### JavaScript
```
var merge = function(nums1, m, nums2, n) {
    if(nums1.length == m + n && nums2.length == n && m>=0 && m<201 && n>=0 && n<201
        && m+n>=1 && m+n<201){
        let j= 0
        for(let i= m; i<nums1.length;i++){
            nums1[i]=nums2[j]
            j++
        }
        nums1.sort((a, b) => a - b);
    }
};
```

