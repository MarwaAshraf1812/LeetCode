/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // manully coping
    // let ans = new Array(nums.length * 2);
    // for (let i = 0; i < nums.length; i++) {
    //     ans[i] = nums[i];
    //     ans[i + nums.length] = nums[i];

    // }
    // return ans;

    // return nums.concat(nums)


    let ans = new Array(nums.length * 2);
    nums.forEach((num, i) => {
        ans[i] = num;
        ans[i + nums.length] = num
    })
    return ans
};