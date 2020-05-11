/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1365
let smallerNumbersThanCurrent = function (nums) {
    let result = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                if (nums[i] > nums[j]) {
                    count++;
                }
            } else {

            }
        }
        result.push(count);
        count = 0;
    }
    return result;
};