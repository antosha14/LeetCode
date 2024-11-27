'Решение с матрицей через динамическое программирование'
// Invalidate the current state since it's not a single character string.
// If the characters at i and j are the same, check the inner substring.
// Set the state based on the substring inside the current bounds.
// If the substring is a palindrome and larger than the current maxLength, update maxLength and startIndex.

function longestPalindrome(s: string): string {
    const length = s.length;
    const isPalindrome: boolean[][] = Array(length)
        .fill(0)
        .map(() => Array(length).fill(true));

    let startIndex = 0;
    let maxLength = 1;

    for (let i = length - 2; i >= 0; --i) {
        for (let j = i + 1; j < length; ++j) {
            isPalindrome[i][j] = false;
            if (s[i] === s[j]) {
                isPalindrome[i][j] = isPalindrome[i + 1][j - 1];
                if (isPalindrome[i][j] && maxLength < j - i + 1) {
                    maxLength = j - i + 1;
                    startIndex = i;
                }
            }
        }
    }
    return s.slice(startIndex, startIndex + maxLength);
}

function longestPalindrome2(s: string): string {
    let currentPalLeft = 0;
    let currentPalRight = 0;
    let MaxPalLeftIndex = 0;
    let MaxPalRightIndex = 0;

    for (let i = 0; i < s.length; i++) {
        currentPalLeft = i
        currentPalRight = i
        while (currentPalRight + 1 < s.length && s[currentPalLeft] == s[currentPalRight + 1]) {
            currentPalRight++
        }

        currentPalLeft--
        currentPalRight++
        let flag = true
        while (flag && currentPalLeft >= 0 && currentPalRight < s.length) {
            if (s[currentPalLeft] != s[currentPalRight]) {
                flag = false
            } else {
                currentPalLeft--
                currentPalRight++
            }
        }
        currentPalLeft++
        currentPalRight--

        if ((currentPalRight - currentPalLeft) >= (MaxPalRightIndex - MaxPalLeftIndex)) {
            MaxPalLeftIndex = currentPalLeft
            MaxPalRightIndex = currentPalRight
        }
    }
    console.log(s.substring(MaxPalLeftIndex, MaxPalRightIndex + 1))
    return s.substring(MaxPalLeftIndex, MaxPalRightIndex + 1)
}