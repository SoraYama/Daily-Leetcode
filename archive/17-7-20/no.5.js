/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let t = "$#";
    for(let i = 0; i < s.length; i++) {
        t += s[i];
        t += "#";
    }
    let p = [];
    let mx = 0, id = 0, resLen = 0, resCenter = 0;
    for(let i = 1; i < t.length; i++) {
        p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
        while(t[i + p[i]] === t[i - p[i]]) {
            p[i]++;
        }
        if(mx < i + p[i]) {
            mx = i + p[i];
            id = i;
        }
        if(resLen < p[i]) {
            resLen = p[i];
            resCenter = i;
        }
    }
    return s.substr(Math.floor((resCenter - resLen) / 2), resLen - 1);
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var length = s.length;  // Length of the string
  var max = 1;            // Length of longest palindrome found so far
  var start = 0;          // Starting index of longest palindrome found so far
  var newLength = 0;      // Length of current palindrome being counted
  
  for (var i = 0; i < length;) {
    // Palindromes are symmetrical, so if the current index is greater than the midpoint
    // of the longest palindrome we've found so far, we know this one can't be longer
    if ((length - i) <= (max / 2)) {
      break;
    }
    
    // These are counters to help us walk through the string, starting at the current index
    var left = i;
    var right = i;
    
    // Increment the right boundary until we aren't looking at a duplicate character or have
    // reached the end of the string. This deals with the case where the palindrome has an
    // even number of characters.
    while (right < length - 1 && s[right] === s[right+1]) {
      right++;
    }
    
    i = right + 1;
    
    // Fan out from the center, checking to see whether we have a palindrome
    while (right < length - 1 && left > 0 && s[right+1] === s[left - 1]) {
      right++;
      left--;
    }
    
    // The length of the current palindrome is the distance between the right and left boundaries
    newLength = right - left + 1;
    
    // Update our index of current
    if (newLength > max) {
      max = newLength;
      start = left;
    }
  }
  
  return s.substr(start, max);
};
console.log(longestPalindrome("asdqdf"));