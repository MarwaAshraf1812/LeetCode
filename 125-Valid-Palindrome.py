class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Step 1: Convert to lowercase
        s = s.lower()
        
        # Step 2: Remove non-alphanumeric characters
        cleaned = ''.join(char for char in s if char.isalnum())
        
        # Step 3: Check if the cleaned string is a palindrome
        return cleaned == cleaned[::-1]

