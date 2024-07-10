/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length;
    let swapped;

    // The outer loop runs at least once (due to do-while) and continues as long as swapped is true.
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++){
            if (nums[i] > nums[i + 1]){
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }

    }while(swapped)
};