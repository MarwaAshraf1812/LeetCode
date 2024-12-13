/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let unique_values = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (unique_values.has(nums[i])) {
            return true
        } else {
            unique_values.add(nums[i])
        }
    }
    return false
    
};