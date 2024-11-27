class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * Merges k sorted linked lists into one sorted linked list and returns its head.
 * Uses a minimum priority queue to determine the next smallest element to be added to the merged list.
 * @param lists - An array of ListNode instances representing the heads of k sorted linked lists
 * @returns A ListNode instance representing the head of the merged sorted linked list, or null if all lists are empty
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // Initialize a minimum priority queue with a custom priority comparator based on ListNode's value
    const minPriorityQueue = new MinPriorityQueue({ priority: (node: ListNode) => node.val });

    for (const head of lists) {
        if (head) {
            minPriorityQueue.enqueue(head);
        }
    }

    // Create a dummy head for the merged list
    const dummyHead = new ListNode();
    // 'current' keeps track of the last node in the merged list
    let current: ListNode = dummyHead;

    // Continue combining nodes until the priority queue is empty
    while (!minPriorityQueue.isEmpty()) {
        // Dequeue the smallest element and add it to the merged list
        const node = minPriorityQueue.dequeue().element;
        current.next = node;
        current = current.next;

        // If there is a next node in the dequeued element's list, enqueue it
        if (node.next) {
            minPriorityQueue.enqueue(node.next);
        }
    }

    // Return the merged list, which starts at dummyHead's next node
    return dummyHead.next;
}