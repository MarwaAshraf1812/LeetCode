class Solution:
    def sortColors(self, nums: List[int]) -> None:
        \\\
        Do not return anything, modify nums in-place instead.
        \\\
        low, mid , high =  0, 0, len(nums) - 1

        # The loop continues until mid exceeds high, ensuring all elements are sorted correctly.
        while mid <= high:
            # If nums[mid] is 0: Swap nums[low] and nums[mid], then increment both low and mid.
            if nums[mid] == 0:
                [nums[low], nums[mid]] = [nums[mid], nums[low]]
                low +=1
                mid +=1
            # If nums[mid] is 1: Just move mid forward.
            elif nums[mid] == 1:
                mid +=1
            # If nums[mid] is 2: Swap nums[high] and nums[mid], then decrement high.
            else:
                 [nums[high], nums[mid]] = [nums[mid], nums[high]]
                 high -=1
