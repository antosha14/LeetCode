function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = Array(s.length + 1).fill(false);
    dp[0] = true;
  
    for (let i = 0; i < s.length; i++) {
      if (!dp[i]) continue;
      for (const word of wordDict) {
        if (i + word.length > s.length) continue;
        const target = s.slice(i, i + word.length);
        if (word === target) {
          dp[i + word.length] = true;
        }
      }
    }
  
    return dp[s.length];
  }