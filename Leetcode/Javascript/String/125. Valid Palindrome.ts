// If the character at the start index is not alphanumeric, move the start pointer forward.
// If the character at the end index is not alphanumeric, move the end pointer backward.
// If the alphanumeric characters are not equal (ignoring case), return false.
// If the alphanumeric characters match, move both pointers towards the center.

function isPalindrome(str: string): boolean {
    let startIdx = 0;
    let endIdx = str.length - 1;
    const alphaNumericRegExp = /[a-zA-Z0-9]/;

    while (startIdx < endIdx) {
        if (!alphaNumericRegExp.test(str[startIdx])) {
            ++startIdx;
        }
        else if (!alphaNumericRegExp.test(str[endIdx])) {
            --endIdx;
        }
        else if (str[startIdx].toLowerCase() !== str[endIdx].toLowerCase()) {
            return false;
        }

        else {
            ++startIdx;
            --endIdx;
        }
    }
    
    return true;
}
