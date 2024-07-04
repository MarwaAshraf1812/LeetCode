from collections import Counter
import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        countFrequencies = Counter(nums)
        minHeap = []

        for num, freq in countFrequencies.items():
            heapq.heappush(minHeap, (freq, num))
            if len(minHeap) > k:
                heapq.heappop(minHeap)

        return [num for freq, num in minHeap]
