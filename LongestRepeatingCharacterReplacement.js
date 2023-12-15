var characterReplacement = function(s, k) {
  var charMap = new Map();
  let left = 0;
  let res=0;
  let maxCount=0;
  for (let right = 0; right < s.length; right++) {
    charMap[s[right]]= 1 + (charMap[s[right]]||0);//Update character count
    maxCount = Math.max(maxCount,charMap[s[right]]);//window most frequent character

    while(right-left+1 - maxCount>k){ //windowLength - windowMostFrequentChar > k
      charMap[s[left]]--; //Decrease count of s[left] because I'm "deleting it" from the window
      left++;
    } //windowLength - windowMostFrequentChar<=k
    res = Math.max(res, right-left+1) //update result with the window current size
  }
  return res;
}

//Output: 4 -> Explanation: Replace the two 'A's with two 'B's or vice versa.
console.log(characterReplacement("ABAB",2));

//Output: 4
console.log(characterReplacement("AABABBA",1));

//output: 4
console.log(characterReplacement("ABBB",2));
