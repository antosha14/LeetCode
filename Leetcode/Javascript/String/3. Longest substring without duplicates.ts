// 2 Pointers shrinking left to the right when encountering duplicate

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
  
    const seenCharacters = new Set<string>();
  
    let i = 0;
    let j = 0;
  
    while (i < s.length) {
        while (seenCharacters.has(s[i])) {
            seenCharacters.delete(s[j]);
            j++;
        }
      
        seenCharacters.add(s[i]);
        maxLength = Math.max(maxLength, i - j + 1);
        i++;
    }
  
    return maxLength;
}
