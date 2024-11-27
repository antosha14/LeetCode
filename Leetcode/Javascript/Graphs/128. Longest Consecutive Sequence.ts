// Function to find the length of the longest consecutive elements sequence.
// Initialising a set to store unique numbers from the input.
// Stores the length of the longest consecutive sequence.
 
// Iterate over each number in the set.
// Check if current number is the beginning of a sequence.
// Starting number of the current sequence.
// Initializing current streak length.
// Incrementally check consecutive numbers.
// Update the longest streak if current one is longer.
// Return the length of the longest consecutive sequence.

function longestConsecutive(nums: number[]): number {
    const numSet: Set<number> = new Set(nums);
    let longestStreak = 0; 

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;         
            let currentStreak = 1;        
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
}
