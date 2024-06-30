class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        strs.sort()

        prefix = ""
        """
        The zip() function is versatile and useful for combining 
        and manipulating data from     
        multiple iterables in Python. It's commonly 
        used in scenarios where you need to process 
        corresponding elements from different sequences together
        """
        for c1, c2 in zip(strs[0], strs[-1]):
            if c1 == c2: prefix += c1
            else: break
        return prefix