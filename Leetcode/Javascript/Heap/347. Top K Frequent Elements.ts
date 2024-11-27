// Initialize a Map to hold the frequency of each number
// Iterate over the array of numbers and populate the frequencyMap
// Convert the Map into an array of key-value pairs
// Sort the array based on frequency in descending order
// Initialize an array to hold the top k frequent elements0
// Iterate k times and push the most frequent elements onto the topKElements array
// Return the top k frequent elements

//ЛИБО МОЖНО ИСПОЛЬЗОВАТЬ СЛЕДУЮЩУЮ СТРУКТУРУ - ИНДЕКС - кол-во найденных символов, ЗНАЧЕНИЕ - список символов с таким кол-вом значений. А этот список будет с максимальной длинной равной длинне инпута
function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const frequencyArray = Array.from(frequencyMap);
    frequencyArray.sort((a, b) => b[1] - a[1]);
    const topKElements: number[] = [];
    for (let i = 0; i < k; i++) {
        topKElements.push(frequencyArray[i][0]);
    }

    return topKElements;
}