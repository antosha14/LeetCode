function lengthOfLastWord(s: string): number {
    let endIndex = s.length - 1;
  
    while (endIndex >= 0 && s[endIndex] === ' ') {
        endIndex--;
    }
  
    if (endIndex < 0) {
        return 0;
    }

    let startIndex = endIndex;
    while (startIndex >= 0 && s[startIndex] !== ' ') {
        startIndex--;
    }
  
    return endIndex - startIndex;
}