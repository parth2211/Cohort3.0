/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let n = str.length;
  let s = str.toLowerCase();
  let i=0, j=n-1;
  while(i <= j) {
    if(!(s[i] >= 'a' && s[i] <= 'z'))
      i++;
    if(!(s[j] >= 'a' && s[j] <= 'z'))
      j--;
    if((s[i] >= 'a' && s[i] <= 'z') && (s[j] >= 'a' && s[j] <= 'z')) {
      if(s[i] != s[j])
        return false;
      i++;
      j--;
    }
  }
  return true;
}

module.exports = isPalindrome;
