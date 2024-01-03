/*class Solution {
    public int findContentChildren(int[] g, int[] s) {
      sortArray(g);
      sortArray(s);
      int result=0;
      int p1=0,p2=0;
      while(p1<g.length && p2<s.length){
        if(g[p1]==s[p2]){
          result++;
          p1++;
          p2++;
        }else if(g[p1]<s[p2]){
          p1++;
        }else{
          p2++;
        }
      }
      return result;
    }
    public static void sortArray(int[]arr){
      for(int i=0;i<arr.length-1;i++){
        int minIndex = i;
        for (int j = i+1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }
}
*/
import java.util.Arrays;
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int result = 0;
        int childIndex = 0;
        int cookieIndex = 0;

        while (childIndex < g.length && cookieIndex < s.length) {
            if (g[childIndex] <= s[cookieIndex]) {
                result++;
                childIndex++;
                cookieIndex++;
            } else {
                cookieIndex++;
            }
        }
        return result;
    }
}

