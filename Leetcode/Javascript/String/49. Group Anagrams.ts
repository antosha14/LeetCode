// Define a map to hold the sorted string as key and an array of its anagrams as value.
// Iterate through each string in the input array.
// Sort the characters of the string to form the key.
// If the key is not present in the map, initialize it with an empty array.
// Add the original string to the corresponding key's list of anagrams.
// Convert the values of the map to an array and return.

'The exclamation mark (!) is used here to assert that the value returned by get(key) is not null or undefined. This is a TypeScript feature that tells the compiler to treat the result as a non-nullable type. It effectively means "I am sure this value exists"'

function groupAnagrams(strs: string[]): string[][] {
    const anagramMap: Map<string, string[]> = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key)!.push(str);
    }
    
    return Array.from(anagramMap.values());
}