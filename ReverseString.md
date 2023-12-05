# Problem 
- (https://leetcode.com/problems/reverse-string/)
<br>

# My solution

### Java
```
class Solution {
    public void reverseString(char[] s) {
        if(s.length>= 1 && s.length<=100000){
            char[] copia = Arrays.copyOf(s, s.length);
            int aux = 0;
            for(int i = copia.length - 1; i>=0; i--){
                s[aux] = copia[i];
                aux++;
            }
        }       
    }
}
```

# Optimous solution
### Java
```
class Solution {
    public void reverseString(char[] s) {
        if (s.length >= 1 && s.length <= 100000) {
            int left = 0;
            int right = s.length - 1;
            while (left < right) {
                char temp = s[left];
                s[left] = s[right];
                s[right] = temp;
                left++;
                right--;
            }
        }
    }
}
```
### JavaScript
```
var reverseString = function(s) {
    if(s.length >= 1 && s.length <= 100000){
        let i = 0, j = s.length - 1;
        while (i < j) {
            const temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
    }
};
```

