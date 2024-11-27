type ListNode = {
    val: number;
    next: ListNode | null;
}

function createListNode(val: number = 0, next: ListNode | null = null): ListNode {
    return { val, next };
}

/**
 * Removes the n-th node from the end of the list and returns the head of the modified list.
 * @param {ListNode | null} head - The head of the linked list.
 * @param {number} n - The position from the end of the list to remove the node.
 * @returns {ListNode | null} - The head of the list after removal.
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = createListNode(0, head);
    let fastPointer: ListNode | null = dummy;
    let slowPointer: ListNode | null = dummy;
  
    for (let i = 0; i < n; ++i) {
        fastPointer = fastPointer.next;
    }
  
    while (fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
    slowPointer.next = slowPointer.next.next;
    return dummy.next;
}
