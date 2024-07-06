class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        # These lines initialize three lists (prefix, suffix, and answer) each of length n with all elements set to 1.
        prefix = [1] * n
        suffix = [1] * n
        answer = [1] * n

        # This loop calculates the prefix products for each element in nums except the first one.
        for i in range(1, n):
            prefix[i] = prefix[i - 1] * nums[i - 1]

        # This loop calculates the suffix products for each element in nums except the last one.
        for i in range(n - 2, -1, -1):
            suffix[i] = suffix[i + 1] * nums[i + 1]

        for i in range(n):
            answer[i] = prefix[i] * suffix[i]

        return answer
