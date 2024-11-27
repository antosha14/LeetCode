// Iterate through each character position in the string, expanding potential palindromes.
// Find the starting positions of potential palindromes.
// Expand around the center while the characters match and we're within the bounds of the string.
// Increment the palindrome count.
// Move outwards to check the next characters.

function countSubstrings(str: string): number {
    let count: number = 0;
    const length: number = str.length;

    for (let center = 0; center < length * 2 - 1; ++center) {
        let left: number = center >> 1;
        let right: number = (center + 1) >> 1;
        while (left >= 0 && right < length && str[left] == str[right]) {
            ++count;
            --left;
            ++right;
        }
    }
    return count;
}