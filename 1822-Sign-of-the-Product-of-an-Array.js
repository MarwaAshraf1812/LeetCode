/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negativeCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            return 0;
        } else if (nums[i] < 0) {
            negativeCount++;
        }
    }
    return (negativeCount % 2 === 0) ? 1 : -1;
};
