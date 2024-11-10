// Create a 2D array 'dp' (for Dynamic Programming) to store lengths of
// subsequences. +1 is for the base case where one of the strings is empty.

// Check if the current character of 'text1' matches with the current
// character of 'text2'

// If there's a match, increment the length of the subsequence
// considering characters up to i and j are part of the subsequence

// If there's no match, take the maximum length from either
// excluding the current character of 'text1' or 'text2'

// If there's no match, take the maximum length from either
// excluding the current character of 'text1' or 'text2'


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const text1Length = text1.length; 
    const text2Length = text2.length; 

    const dp = Array.from({ length: text1Length + 1 }, () => Array(text2Length + 1).fill(0));

    for (let i = 1; i <= text1Length; i++) {
        for (let j = 1; j <= text2Length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
  
    return dp[text1Length][text2Length];
};

