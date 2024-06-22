class Solution(object):
    def containsDuplicate(self, nums):
        """
        Day 1:
        This implementation uses a set to efficiently keep track of 
        unique elements encountered during the iteration. If a duplicate is found, 
        the method returns True; otherwise, it returns False. The time complexity of this solution is O(n),
        where n is the length of the input array nums, 
        due to the constant-time average complexity of set operations like in and add.
        """
        set_nums = set()

        for i in nums:
            if i in set_nums: return True
            else: set_nums.add(i)
        return False