var mergeTwoLists = function(list1, list2) {
    // Step 1: Create a dummy node
    const dummy = new ListNode(-Infinity);
    // Step 2: Initialize pointers
    let prev = dummy;
    let current1 = list1;
    let current2 = list2;

    // Step 3: Merge the lists
    while (current1 && current2) {
        // Step 4: Compare values and link nodes
        if (current1.val <= current2.val) {
            prev.next = current1;
            prev = current1;
            current1 = current1.next;
        } else {
            prev.next = current2;
            prev = current2;
            current2 = current2.next;
        }
    }

    // Step 5: Complete the merging process
    if (current1) prev.next = current1;
    if (current2) prev.next = current2;

    // Step 6: Finalize the merged list

    // Step 7: Return the merged list
    return dummy.next;
};

`Recurtion`
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
 
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
