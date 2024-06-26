class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        nums_indices = [(num, index) for index, num in enumerate(nums)]
        nums_indices.sort(key=lambda x: x[0])

        left = 0
        right = len(nums) - 1

        while left < right:
            current_sum = nums_indices[left][0] + nums_indices[right][0]

            if current_sum == target:
                return [nums_indices[left][1], nums_indices[right][1]]
            elif current_sum < target:
                left += 1
            else:
                right -= 1
