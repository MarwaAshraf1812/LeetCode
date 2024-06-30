class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total_sum = sum(nums)
        leftSum = 0
        
        for i in range(len(nums)):
            if leftSum == total_sum - leftSum - nums[i]:
                return i
            leftSum += nums[i]
        
        return -1
