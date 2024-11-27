// Function to create a new trie node.
// Function to insert a word into the trie.
// Function to find words on the board that exist in the trie.

`Массив где индекс - это номер буквы, а значение это таер для этой буквы, где в качестве значений индекс этой буквы в слове`
let trieNodes: { children: (number | null)[]; ref: number }[] = [];
let nodeIdCounter = 0;

function createTrieNode(): number {
    const newNodeId = nodeIdCounter++;
    trieNodes[newNodeId] = { children: Array(26).fill(null), ref: -1 };
    return newNodeId;
}

function insertIntoTrie(word: string, ref: number): void {
    let nodeId = 0;
    for (const char of word) {
        const index = char.charCodeAt(0) - 97;
        if (trieNodes[nodeId].children[index] === null) {
            trieNodes[nodeId].children[index] = createTrieNode();
        }
        nodeId = trieNodes[nodeId].children[index] as number;
    }
    trieNodes[nodeId].ref = ref;
}

function findWords(board: string[][], words: string[]): string[] {
    trieNodes = [];
    nodeIdCounter = 0;
    createTrieNode();
    words.forEach((word, index) => insertIntoTrie(word, index));

    const rows = board.length;
    const cols = board[0].length;
    const foundWords: string[] = [];
    const directions: number[] = [-1, 0, 1, 0, -1];

    function dfs(nodeId: number, x: number, y: number, curWord: string): void {
        const charIndex = board[x][y].charCodeAt(0) - 97;
        const nextNodeId = trieNodes[nodeId].children[charIndex];
        if (nextNodeId === null) {
            return;
        }

        curWord += board[x][y];

        if (trieNodes[nextNodeId].ref != -1) {
            foundWords.push(words[trieNodes[nextNodeId].ref]);
            trieNodes[nextNodeId].ref = -1;
        }

        const originalChar = board[x][y];
        board[x][y] = '#'; 

        for (let i = 0; i < 4; ++i) {
            const newX = x + directions[i];
            const newY = y + directions[i + 1];

            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && board[newX][newY] !== '#') {
                dfs(nextNodeId, newX, newY, curWord);
            }
        }

        board[x][y] = originalChar; 
    }

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            dfs(0, i, j, '');
        }
    }

    return foundWords;
}
