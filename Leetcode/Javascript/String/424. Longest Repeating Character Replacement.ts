'Массив с charCodeAt - a.charCodeAt в качестве индексов'

// Reset variables for a new call
// Counter for each letter's frequency within the sliding window
// Variable to keep track of the count of the most frequent character within the window

// Check if the current window size minus the count of the max frequency character
// is greater than k. If so, shrink the window from the left.


function characterReplacement(s: string, k: number): number {
    const charCount: number[] = new Array(26).fill(0);
    let left: number = 0;
    let right: number = 0;
    let maxCharCount: number = 0;

    charCount.fill(0);
    left = 0;
    right = 0;
    maxCharCount = 0;

    for (right = 0; right < s.length; ++right) {
        charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
        maxCharCount = Math.max(maxCharCount, charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]);

        if (right - left + 1 - maxCharCount > k) {
            charCount[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
            left++;
        }
    }
  
    return right - left;
}