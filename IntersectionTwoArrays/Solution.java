import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        var set1 = new HashSet<Integer>();
        var set2 = new HashSet<Integer>();

        for(var n : nums1){
            set1.add(n);
        }
        for(var n : nums2){
            if(set1.contains(n)){
                set2.add(n);
            }
        }
        var arr = new int[set2.size()];
        var i = 0;
        for(var n : set2){
            arr[i++]=n;
        }
        return arr;
    }
}
