// Helper function to convert a character to an index (0 for 'a', 1 for 'b', etc.).
// Array to count the frequency of each character, assuming only lowercase letters.
// Populate the frequency count array with the occurrences of each character in theinput string.
// If any character frequency is less than k, it's impossible to satisfy the condition, return -1.

// Initialize the answer (maximum substring length satisfying the condition).
// Two pointers i and j to apply the sliding window technique.\
// Decrease the frequency count of the j-th character as it's now outside the window.
// Slide the start of the window forward while the current character's frequency is below k.
// Increase the frequency count of the i-th character as it's now included in the window.
// Calculate the maximum substring length by comparing with the current window size.
// The answer is the difference between the string's length and the maximum substring length.
function takeCharacters(str: string, k: number): number {
    const getIndex = (char: string) => char.charCodeAt(0) - 'a'.charCodeAt(0);
    const frequencyCount = [0, 0, 0];

    for (const char of str) {
        frequencyCount[getIndex(char)]++;
    }
    
    if (frequencyCount.some(value => value < k)) {
        return -1;
    }
    const stringLength = str.length;
    let maxSubstringLength = 0;
    
    for (let i = 0, j = 0; j < stringLength; j++) {
        frequencyCount[getIndex(str[j])]--;
        while (frequencyCount[getIndex(str[j])] < k) {
            frequencyCount[getIndex(str[i])]++;
            i++;
        }

        maxSubstringLength = Math.max(maxSubstringLength, j - i + 1);
    }
    return stringLength - maxSubstringLength;
}