class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        # new_s = s.strip()
        # return len(new_s.split(' ')[-1])

        # return len(s.strip().split(' ')[-1])

        length_of_last_word = 0
        is_traversed = False

        for i in reversed(s):
            if i == ' ':
                if is_traversed:
                    break
            else:
                is_traversed = True
                length_of_last_word += 1
        return length_of_last_word
