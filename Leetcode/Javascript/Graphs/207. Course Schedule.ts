// Create an adjacency list to represent the graph of courses
// Array to store the in-degree (number of dependencies) of each course
// Fill the adjacency list and in-degree array based on prerequisites

// Queue for courses with no prerequisites (in-degree of 0)
// Initialize the queue with courses that have no prerequisites
// Counter for the number of courses with satisfied prerequisites

// Process the queue until it's empty
// Remove the first course from the queue
// Increment the count of courses that can be taken
// Decrease the in-degree of the adjacent courses and
// add them to the queue if they have no other prerequisites
// Compare the count of courses taken to the total number of courses

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjacencyList: number[][] = new Array(numCourses).fill(0).map(() => []);
    const inDegrees: number[] = new Array(numCourses).fill(0);
  
    for (const [course, prerequisite] of prerequisites) {
        adjacencyList[prerequisite].push(course);
        inDegrees[course]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < numCourses; ++i) {
        if (inDegrees[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;
    while (queue.length) {
        const currentCourse = queue.shift()!;
        count++;
        for (const adjacentCourse of adjacencyList[currentCourse]) {
            if (--inDegrees[adjacentCourse] === 0) {
                queue.push(adjacentCourse);
            }
        }
    }

    return count === numCourses;
}