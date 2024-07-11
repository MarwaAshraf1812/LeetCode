/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // To track the sum of elements so far
    let comulativeSum = 0;
    // to track the subarrays that sum to k
    let count = 0;
    // to store frequency of cumulative sums
    /*
       the key  0 -> represents a cumulative sum
       the value 1 -> indicates that cumulative sum of 0 has been ecountered once
    */
    let sumFrequency = {0: 1};

    for (let number of nums) {
        // Add the current number to cummulative
        comulativeSum += number;

        // Check if comulativeSum - k exists in sumFrequency
        // If it exists, it means there are subarrays that sum to k
        if (sumFrequency[comulativeSum - k] !== undefined) {
            // Increment count by the number of times (comulativeSum - k) has occurred
            count += sumFrequency[comulativeSum - k];
        }
        // Update the frequency of cumulativeSum in sumFrequency
        // If cumulativeSum exists, increment its frequency by 1, otherwise it to 1
        sumFrequency[comulativeSum] = (sumFrequency[comulativeSum] || 0) + 1;
    }
    return count;
};
