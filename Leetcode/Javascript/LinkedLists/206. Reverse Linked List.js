`
Решаем через предыдущий и текущий. Для каждого нода обновляем его некст на предыдущий нод который храним в отдельной переменной. Предыдущий начинается с нулл
Цикл пока есть текущий, а доступ к следующему получаем через next и храним его в пеереходной переменной
`

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr){
        let next = curr.next
        curr.next=prev
        prev=curr
        curr=next
    }

    return prev
};