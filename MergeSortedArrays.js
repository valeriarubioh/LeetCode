/*var mergeList = function(nums1, m, nums2, n) {
    let mergedIndex = m + n - 1;

    while(m>0 && n>0){
        if(nums1[m-1]>nums2[n-1]){
            nums1[mergedIndex--]=nums1[m-1];
            m--;
        }else{
            nums1[mergedIndex--]=nums2[n-1];
            n--;
        }
    }
    while(m > 0){
        nums1[mergedIndex]=nums1[m-1];
        m--;
    }
    while (n > 0) {
        nums1[mergedIndex--] = nums2[n - 1];
        n--;
    }              
    return nums1;
};*/

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

nums1 = [1, 2, 3, 0, 0, 0, 0];
m = 3;
nums2 = [-4, 2, 3, 9];
n = 4;
console.log("Input1", mergeList(nums1, m, nums2, n));