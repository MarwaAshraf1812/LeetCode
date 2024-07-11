/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let comulativeSum = 0;
    let count = 0;
    let sumFrequency = {0: 1};

    for (let number of nums) {
        comulativeSum += number;
        if (sumFrequency[comulativeSum - k] !== undefined) {
            count += sumFrequency[comulativeSum - k];
        }
        sumFrequency[comulativeSum] = (sumFrequency[comulativeSum] || 0) + 1;
    }
    return count;
};