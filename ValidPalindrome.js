/*
  @param {string} s
  @return {boolean}
 */

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length-1;
  while (left < right && s.length >= 1) {
    if(s.charAt(left)!=s.charAt(right)){
      if(isPalindrome(s,left+1,right)||isPalindrome(s,left,right-1)){
        return true;
      }
      return false;
    }else{
      left++;
      right--;
    }
  }
  return true;
};
var isPalindrome = function (word,start,end){
  while(start<end){
    if(word.charAt(start)!=word.charAt(end)){
      return false;
    }else{
      start++;
      end--;
    }
  }
  return true;
};

const l = "aba"; //true
const m = "abca"; //true
const n = "abc"; //false
const s = "deeee"; //true
console.log(validPalindrome(l));
//console.log(validPalindrome(m));
//console.log(validPalindrome(n));
//console.log(validPalindrome(s));
