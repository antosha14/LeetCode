"""
Ответ будет бит, который стоит у большего кол-ва чисел
Итерация по битам и по всем числам с каунтером
"""


class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        max_count = 0

        for bit_position in range(32):
            count_with_bit_set = 0
            for candidate in candidates:
                if (candidate >> bit_position) & 1:
                    count_with_bit_set += 1
            max_count = max(max_count, count_with_bit_set)
        return max_count
