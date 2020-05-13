/**
 * @param {number[]} nums
 * @return {number}
 */
// 1295
var findNumbers = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = String(nums[i]).split("")
        let count = 0;
        for (let j = 0; j < temp.length; j++) {
            count++;
        }
        if (count % 2 == 0) {
            result++;
        }
    }
    return result;
};