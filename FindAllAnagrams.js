/*
@param {string} s
@param {string} p
@return {number[]}
*/
var findAnagrams = function(s, p) {
  let result = [];
  let l=0;
  const sCount = new Map();
  const pCount = new Map();

  if(p.length > s.length) return result;

  for (let i = 0; i < p.length; i++) {
    pCount.set(p[i], (pCount.get(p[i]) || 0) + 1);
    sCount.set(s[i], (sCount.get(s[i]) || 0) + 1);
  }
  result = sCount.size === pCount.size && mapsAreEqual(sCount, pCount) ? [0] : [];

  for(let r=p.length; r<s.length; r++){
    sCount.set(s[r], (sCount.get(s[r]) || 0) + 1);
    sCount.set(s[l], (sCount.get(s[l]) || 0) - 1);

    if (sCount.get(s[l]) === 0) sCount.delete(s[l]);

    l++;

    if (mapsAreEqual(sCount, pCount)) {
      result.push(l);
    }
  }
  return result;
};

function mapsAreEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false;
    }
  }

  return true;
};

console.log(findAnagrams("cbaebabacd","abc"))
//Output: [0,6]

console.log(findAnagrams("abab","ab"))
//Output: [0,1,2]
