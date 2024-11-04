
var mergeTwoLists = function(list1, list2) {
    const dummy=new ListNode()
    let current=dummy
    let l1=list1
    let l2=list2
    while(l1&&l2){
        if(l1.val<l2.val){
            current.next=l1
            l1=l1.next
        }
        else{
            current.next=l2
            l2=l2.next
        }
        current=current.next
    }
    if(l1){
        current.next=l1
    }
    if(l2){
        current.next=l2
    }
    return dummy.next
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
