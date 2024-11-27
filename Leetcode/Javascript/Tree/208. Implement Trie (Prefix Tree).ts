`
Одинаковые префиксы шерятся
Каждый нод - символ, одна из букв или флаг конца
`

// Global trie node structure
const trieNodes: TrieNode[] = [];
const isEndOfWord: boolean[] = [];
let rootIndex: number;
// Initialize a Trie

interface TrieNode {
    childrenIndices: number[];
}

function initializeTrie() {
    rootIndex = createNode();
}

// Create a trie node and return its index
function createNode(): number {
    const nodeIndex = trieNodes.length;
    trieNodes.push({
        childrenIndices: new Array(26).fill(-1)  // Initialize all children indices to -1
    });
    isEndOfWord.push(false);  // By default, a node is not the end of a word
    return nodeIndex;
}

// Insert a word into the trie
function insert(word: string): void {
    let nodeIndex = rootIndex;
    for (let char of word) {
        let charIndex = char.charCodeAt(0) - 97; // Convert char to an index (0-25)
        if (trieNodes[nodeIndex].childrenIndices[charIndex] === -1) {
            trieNodes[nodeIndex].childrenIndices[charIndex] = createNode(); // Create the child node if it doesn't exist
        }
        nodeIndex = trieNodes[nodeIndex].childrenIndices[charIndex];
    }
    isEndOfWord[nodeIndex] = true; // Mark the end of the word
}

// Search for a word in the trie
function search(word: string): boolean {
    const nodeIndex = searchPrefix(word);
    return nodeIndex !== undefined && isEndOfWord[nodeIndex];
}

// Search for a prefix in the trie
function startsWith(prefix: string): boolean {
    return searchPrefix(prefix) !== undefined;
}

// Helper method to search for a prefix and return the index of the last node of the prefix
function searchPrefix(prefix: string): number | undefined {
    let nodeIndex = rootIndex;
    for (let char of prefix) {
        let charIndex = char.charCodeAt(0) - 97; // Convert char to an index (0-25)
        if (trieNodes[nodeIndex].childrenIndices[charIndex] === -1) return undefined; // If the child doesn't exist, prefix not found
        nodeIndex = trieNodes[nodeIndex].childrenIndices[charIndex];
    }
    return nodeIndex;
}
