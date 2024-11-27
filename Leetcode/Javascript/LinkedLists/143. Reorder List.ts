// First, split the list into two halves. The slowPointer will end up at the midpoint
// Reverse the second half of the list using the standard three-pointer approach
// Now merge the two halves, weaving them together one by one

 function reorderList(head: ListNode | null): void {
    // Go to mid using slow pointer fast pointer
    // if fast pointer.next == null it was even and 
    // reverse after slow pointer
    // if next.next is null then sp = sp.next and then reverse

    let sp: ListNode = head;
    let fp: ListNode = head.next;

    while(fp && fp.next) {
        sp = sp.next;
        fp = (fp.next).next;
    }
    if(fp===sp || sp.next === fp) return;

    // reverse
    let rev: ListNode = sp.next;
    let curr: ListNode = rev.next;
    sp.next = null;
    rev.next = null;
    
    while(curr) {
        let tmp: ListNode = curr;
        curr = curr.next;
        tmp.next = rev;
        rev = tmp;
    }

    curr = head;
    while(curr && rev) {
        let tmp: ListNode = curr.next;
        curr.next = rev;
        rev = rev.next;
        curr = curr.next;
        curr.next = tmp;
        curr= curr.next;
    }
};