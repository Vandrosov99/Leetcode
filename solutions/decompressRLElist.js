/**
 * @param {number[]} nums
 * @return {number[]}
 */
//1313
let decompressRLElist = function (nums) {
    let result = [];
    let temp = 1;
    for (let i = 0; i < nums.length; i = i + 2) {
        temp = nums[i];
        for (let j = 0; j < temp; j++) {
            result.push(nums[i + 1]);
        }
    }
    return result;
};