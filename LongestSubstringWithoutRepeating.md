# My solution
## Sliding window
### JavaScript
```
var lengthOfLongestSubstring = function(s) {
    let charSet = new Map;
    let left=0;
    let res=0;
    for (let i = 0; i < s.length; i++) {
      while (charSet.has(s[i])) {
        charSet.delete(s[left]);
        left++;
      }
      charSet.set(s[i]);

      const len = i - left + 1; // Calculate the length of the current substring
      res = Math.max(res, len);
    }
    return res;
  }
```
```
var lengthOfLongestSubstring = function(s) {
  let charSet = new Map;
  let left=0;
  let res=0;
  for (let i = 0; i < s.length; i++) {
    if(charSet.has(s[i])&&charSet.get(s[i])>=left){
      left = charSet.get(s[i])+1; //1+ window from last time saw the character
    }
    charSet.set(s[i],i);

    const len = i - left + 1; // Calculate the length of the current substring
    res = Math.max(res, len);
  }
  return res;
}
```
