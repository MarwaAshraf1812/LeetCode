/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) return 0; 

    nums.sort((a, b) => a - b);
    let minimumDiff = 1808393;

    // we will start from i and end with i + k - 1 if i >  i + k - 1
    for (let i = 0; i <= nums.length - k; i++) {
        // to create sub array from the main array depends on k 
        let subArray = nums.slice(i, i + k)
        // to get current diff between the highest and lowest 
        let current = subArray[k - 1] - subArray[0];
        // to compare between them
        minimumDiff = Math.min(minimumDiff, current);
        //

    }

    return minimumDiff;
};
