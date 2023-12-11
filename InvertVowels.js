/*
Example 1:

Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

function reverseVowels(s) {
  const vowels = "AEIOUaeiou"
  let left = 0;
  let right = s.length - 1;
  const chars = s.split('');

  while (left < right) {
    if (!vowels.includes(chars[left])) {
      left++;
    } else if (!vowels.includes(chars[right])) {
      right--;
    } else {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  return chars.join('');
}

let s = "aA";
console.log(reverseVowels(s))
