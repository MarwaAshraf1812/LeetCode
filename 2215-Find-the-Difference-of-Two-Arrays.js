/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    /*to remove duplicates and to enable fast lookups*/
    const numSet1 = new Set(nums1);
    const numSet2 = new Set(nums2);

    const disc1 = [];
    const disc2 = [];

    for (let n of numSet1) {
        if (!numSet2.has(n)) {
            disc1.push(n);
        }
    }

    for (let n of numSet2) {
        if (!numSet1.has(n)) {
            disc2.push(n);
        }
    }

    return [disc1, disc2];
};