// Можно использовать Set, но алгоритм с быстрым и медленным поинтером лучше
// Если есть конец то быстрый его достигнет быстрее, а если нет то медленный и быстрый рано или поздно встретятся


function hasCycle(head: ListNode | null): boolean {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if (slowPointer === fastPointer) {
            return true;
        }
    }
  
    return false;
}