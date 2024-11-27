// Initialize arrays to keep track of character frequency in `target`
// and the current window in `source`
// Populate target character frequencies

// Keeps track of how many characters match target in current window
// Left pointer for the sliding window
// Start index of the min-length window
// Length of the smallest window found

// Iterate over the `source` string to find the minimum window
// Include the current character in the window
// If the character is needed and window has enough of that character, increase valid count
// Try and contract the window from the left if it contains all the required characters
// Update the smallest window length
// Update the start index of the smallest window
// Decrease the left-most character's frequency and move the left pointer
// If the character was contributing to valid count, decrease the valid count

// If `start` is not updated, no valid window is found
// Otherwise, return the minimum length window from `source`

function minWindow(source: string, target: string): string {
    const targetFreq: number[] = new Array(128).fill(0);
    const windowFreq: number[] = new Array(128).fill(0);

    for (const char of target) {
        ++targetFreq[char.charCodeAt(0)];
    }

    let validCharCount = 0; 
    let left = 0; 
    let start = -1; 
    let minLength = Infinity; 
    
    for (let right = 0; right < source.length; ++right) {
        const rightCharIndex = source.charCodeAt(right);
        ++windowFreq[rightCharIndex];

        if (windowFreq[rightCharIndex] <= targetFreq[rightCharIndex]) {
            ++validCharCount;
        }

        while (validCharCount === target.length) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1; 
                start = left; 
            }
          
            const leftCharIndex = source.charCodeAt(left);
            if (targetFreq[leftCharIndex] >= windowFreq[leftCharIndex]) {
                --validCharCount; 
            }
            --windowFreq[leftCharIndex];
            ++left;
        }
    }

    return start < 0 ? '' : source.slice(start, start + minLength);
}