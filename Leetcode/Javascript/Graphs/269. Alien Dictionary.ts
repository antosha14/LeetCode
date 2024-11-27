`
In the given problem, we have a set of strings that are words from an alien language that uses the same characters as the English alphabet, but with an unknown order. We are tasked with determining the order of characters in the alien language. The input is a list of words from the alien language. These words are supposed to be sorted lexicographically according to the rules of the alien language. We need to verify if this claim of sorted order is true, and if so, deduce the order of the characters in the alien language based on the words provided.

If we cannot determine a valid character order that would result in the words being sorted lexicographically, we return an empty string. Otherwise, we should return any valid string that represents the characters in the alien language in lexicographically increasing order according to the rules of the language. There may be more than one correct order, in which case any one of them is an acceptable answer.
`

// Initialize type alias for readability
type AlienGraph = boolean[][];
type SeenArray = boolean[];

// Abstracting the letter-to-index conversion into a function
function charToIndex(ch: string): number {
    return ch.charCodeAt(0) - 'a'.charCodeAt(0);
}

// Build the graph from the given list of words
function buildGraph(words: string[], graph: AlienGraph, seen: SeenArray): number {
    let uniqueCharsCount = 0;
    const wordCount = words.length;
  
    for (let i = 0; i < wordCount - 1; ++i) {
        for (const ch of words[i]) {
            const charIndex = charToIndex(ch);
            if (!seen[charIndex]) {
                ++uniqueCharsCount;
                seen[charIndex] = true;
                if (uniqueCharsCount === 26) break;
            }
        }
        const wordLength = words[i].length;
        for (let j = 0; j < wordLength; ++j) {
            if (j >= words[i + 1].length) return -1; // Next word cannot be prefix of the current word
          
            const char1 = words[i][j], char2 = words[i + 1][j];
            if (char1 === char2) continue;
            if (graph[charToIndex(char2)][charToIndex(char1)]) return -1; // Invalid ordering found
          
            graph[charToIndex(char1)][charToIndex(char2)] = true;
            break; // Found the first difference, so move on to next word
        }
    }

    for (const ch of words[wordCount - 1]) {
        const charIndex = charToIndex(ch);
        if (!seen[charIndex]) {
            ++uniqueCharsCount;
            seen[charIndex] = true;
            if (uniqueCharsCount === 26) break;
        }
    }

    return uniqueCharsCount;
}

// Perform topological sort to get alien language order
function alienOrder(words: string[]): string {
    const graph: AlienGraph = Array(26).fill(null).map(() => Array(26).fill(false));
    const seen: SeenArray = Array(26).fill(false);
    let uniqueCharsCount = buildGraph(words, graph, seen);
  
    // Return empty string if invalid prefix or ordering found
    if (uniqueCharsCount === -1) return "";

    // Initialize indegree array and calculate indegrees
    const indegree: number[] = Array(26).fill(0);
    for (let i = 0; i < 26; ++i) {
        for (let j = 0; j < 26; ++j) {
            if (i !== j && seen[i] && seen[j] && graph[i][j]) {
                ++indegree[j];
            }
        }
    }

    // Create a queue and add all the characters with 0 indegree
    const queue: number[] = [];
    for (let i = 0; i < 26; ++i) {
        if (seen[i] && indegree[i] === 0) {
            queue.push(i);
        }
    }

    // Perform the topological sort
    let result = "";
    while (queue.length) {
        const current = queue.shift();
        result += String.fromCharCode(current + 'a'.charCodeAt(0));
      
        for (let i = 0; i < 26; ++i) {
            if (i !== current && seen[i] && graph[current][i]) {
                if (--indegree[i] === 0) {
                    queue.push(i);
                }
            }
        }
    }

    // Check for cycles (if result size doesn't match unique char count)
    if (result.length < uniqueCharsCount) {
        return "";
    }
  
    return result;
}
