from traitlets import List

# n=0 optimization


class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        can_plant = 0
        for item in range(len(flowerbed)):
            if (
                flowerbed[item] == 0
                and item - 1 >= 0
                and flowerbed[item - 1] == 0
                and item + 1 < len(flowerbed)
                and flowerbed[item + 1] == 0
            ):
                can_plant += 1
                flowerbed[item] = 1
            elif item == 0:
                if len(flowerbed) == 1 and flowerbed[item] == 0:
                    can_plant += 1
                    flowerbed[item] = 1
                elif flowerbed[item] == 0 and flowerbed[item + 1] == 0:
                    can_plant += 1
                    flowerbed[item] = 1
            elif (
                item == len(flowerbed) - 1
                and flowerbed[item] == 0
                and flowerbed[item - 1] == 0
            ):
                can_plant += 1
                flowerbed[item] = 1
        return n <= can_plant


class Solution2:
    def canPlaceFlowers(flowerbed: List[int], n: int) -> bool:
        id1, id2 = 0, 0
        l = len(flowerbed)
        id3 = 1 if l > 1 else 0

        while id2 < l and n > 0:
            if flowerbed[id1] == 0 and flowerbed[id2] == 0 and flowerbed[id3] == 0:
                n -= 1
                flowerbed[id2] = 1
                id2 += 2
            else:
                id2 += 1
            id1 = id2 - 1
            if id2 + 1 < l:
                id3 = id2 + 1

        return n == 0


class Solution3:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        for i in range(len(flowerbed)):
            if (
                (flowerbed[i] == 0)
                and (i == 0 or flowerbed[i - 1] == 0)
                and (i == len(flowerbed) - 1 or flowerbed[i + 1] == 0)
            ):
                flowerbed[i] = 1
                n -= 1
                if n == 0:
                    return True
        return False
