/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let frequenced = new Map();

    for (let num of nums) {
        frequenced.set(num, (frequenced.get(num) || 0) + 1)
        if (frequenced.get(num) > Math.floor(nums.length / 2))
        {
            return num
        }
    }
    
};