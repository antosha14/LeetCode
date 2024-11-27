// The ListNode class represents each node of a singly-linked list with a value and a link to the next node.
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Initialize a minimum priority queue with a custom priority comparator based on ListNode's value
// Enqueue the head of each non-empty list into the priority queue
// Create a dummy head for the merged list
// 'current' keeps track of the last node in the merged list
// Continue combining nodes until the priority queue is empty
// Dequeue the smallest element and add it to the merged list
// If there is a next node in the dequeued element's list, enqueue it
// Return the merged list, which starts at dummyHead's next node

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const minPriorityQueue = new MinPriorityQueue({ priority: (node: ListNode) => node.val });

    for (const head of lists) {
        if (head) {
            minPriorityQueue.enqueue(head);
        }
    }

    const dummyHead = new ListNode();
    let current: ListNode = dummyHead;

    while (!minPriorityQueue.isEmpty()) {
        const node = minPriorityQueue.dequeue().element;
        current.next = node;
        current = current.next;
        if (node.next) {
            minPriorityQueue.enqueue(node.next);
        }
    }

    return dummyHead.next;
}
