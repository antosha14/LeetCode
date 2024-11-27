from heapq import heappop, heappush


class MedianFinder:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.small = []
        self.large = []

    def addNum(self, num: int) -> None:
        """
        Adds a number into the data structure.
        """
        heappush(self.small, -num)  # Add to max heap
        # Move the largest element of small (max heap) to large (min heap)
        heappush(self.large, -heappop(self.small))

        # If large heap has more elements, move the smallest element of large to small
        if len(self.large) > len(self.small):
            heappush(self.small, -heappop(self.large))

    def findMedian(self) -> float:
        """
        Returns the median of current data stream
        """
        # If the heaps have equal size, the median is the average of the two heap's top elements
        if len(self.small) == len(self.large):
            return (-self.small[0] + self.large[0]) / 2.0
        # If the small heap has more elements, return the top element of the small heap (which is the max element)
        elif len(self.small) > len(self.large):
            return -self.small[0]
        # Otherwise, return the top element of the large heap (which is the min element)
        else:
            return self.large[0]
