# Problem 
- (https://leetcode.com/problems/merge-sorted-array/)
<br>

# My solution

### Initial JavaScript
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
### Improve JavaScript
```
var mergeList = function (nums1, m, nums2, n) {
  for (let index = m + n - 1; index >= 0; index--) {
    if (m > 0 && n > 0) {
      if (nums1[m - 1] > nums2[n - 1]) {
        nums1[index] = nums1[m - 1];
        m--;
      } else {
        nums1[index] = nums2[n - 1];
        n--;
      }
    } else if (n > 0) {     //se analiza que si m>0 no hay necesidad de cambiar posiciones
      nums1[index] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
};
```

