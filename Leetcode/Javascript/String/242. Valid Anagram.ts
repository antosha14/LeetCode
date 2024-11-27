// Check if both strings are of equal length; if not, they cannot be anagrams
// Инкремент первого и декремент второго, а потом через every все должны быть равны нулю

function isAnagram(source: string, target: string): boolean {
    if (source.length !== target.length) {
        return false;
    }

    const letterCounts = new Array(26).fill(0);

    for (let i = 0; i < source.length; ++i) {
        letterCounts[source.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        letterCounts[target.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return letterCounts.every(count => count === 0);
}