/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
//1486
var xorOperation = function (n, start) {
    nums = [];
    result = 0;
    for (let i = 0; i < n; i++) {
        nums.push(start + 2 * i);
        result = nums[i] ^ result;
    }
    return result;
};