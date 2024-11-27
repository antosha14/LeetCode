'КОД НЕ РАБОТАЕТ ФЕЙЛИТ ПОСЛЕДНИЙ ТЕСТ КЕЙС'

// Define a type for pairs
// Define types for the data structures equivalent to C++ priority_queue and unordered_map
// Fixed dimensions of the puzzle: m x n (2 x 3)
// Convert the board to a string representation
// Function to solve the sliding puzzle
// Start state as a string
// Create a sequence to check solvability (without the zero)
// Check if the board is solvable
// Initialize search with A* algorithm variables
// This would be a priority queue in a full implementation
// Directions for neighbours: up, right, down, left
// Replace 'pop' with an appropriate priority queue pull method
// If goal state is reached, return the steps count
// Explore all neighbouring states
// Update distance if not seen before or if a better path is found
// Swap back to restore state for the next iteration
// Function to check if a given sequence is solvable
// Puzzle is solvable if the number of inversions is even
// Heuristic function for A* Search: calculates the Manhattan distance for misplaced tiles
// Convert character to a number and adjust the index to be zero-based
// Accumulate Manhattan distance for each tile
// Swaps characters in a string based on provided indices and returns a new string
type Pair<T, U> = { first: number; second: string }; 

let distances: { [key: string]: number } = {};

const m: number = 2;
const n: number = 3;
const goalState: string = "123450";

function boardToString(board: number[][]): string {
  return board.flat().join("");
}

function slidingPuzzle(board: number[][]): number {
  let startState: string = boardToString(board);
  let tmpSequence: string = startState.replace("0", "");
  if (!isSolvable(tmpSequence)) return -1;
  let searchQueue: Pair<number, string>[] = []; 
  distances[startState] = 0;
  searchQueue.push({ first: heuristic(startState), second: startState });
  const directions: number[] = [-1, 0, 1, 0, -1];

  while (searchQueue.length > 0) {
    let currentNode: Pair<number, string> = searchQueue.shift()!;
    let currentState: string = currentNode.second;
    let currentSteps: number = distances[currentState];
    if (currentState === goalState) return currentSteps;

    let zeroPosition: number = currentState.indexOf("0");
    let i: number = Math.floor(zeroPosition / n);
    let j: number = zeroPosition % n;

    for (let k: number = 0; k < 4; ++k) {
      let newX: number = i + directions[k];
      let newY: number = j + directions[k + 1];
      if (newX < 0 || newX >= m || newY < 0 || newY >= n) continue;
      let newPosition: number = newX * n + newY;
      currentState = swapChars(currentState, zeroPosition, newPosition);
      if (distances[currentState] === undefined || distances[currentState] > currentSteps + 1) {
        distances[currentState] = currentSteps + 1;
        searchQueue.push({ first: currentSteps + 1 + heuristic(currentState), second: currentState });
      }
      currentState = swapChars(currentState, zeroPosition, newPosition);
    }
  }

  return -1; 
}


function isSolvable(sequence: string): boolean {
  let inversions: number = 0;
  for (let i: number = 0; i < sequence.length; ++i) {
    for (let j: number = i + 1; j < sequence.length; ++j) {
      if (sequence[i] > sequence[j]) ++inversions;
    }
  }
  return inversions % 2 === 0;
}

function heuristic(state: string): number {
  let totalManhattanDistance: number = 0;
  for (let i: number = 0; i < m * n; ++i) {
    if (state[i] === '0') continue; 
    let tileNumber: number = parseInt(state[i], 10) - 1;
    totalManhattanDistance += Math.abs(Math.floor(tileNumber / n) - Math.floor(i / n)) + 
                              Math.abs(tileNumber % n - i % n);
  }
  return totalManhattanDistance;
}

function swapChars(str: string, index1: number, index2: number): string {
  let arr: string[] = str.split('');
  let temp: string = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr.join('');
}