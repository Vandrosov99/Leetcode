/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// 1470
var shuffle = function (nums, n) {
    let result = [];
    let x = [];
    let y = [];
    let len = n * 2;
    for (let i = 0; i < len; i++) {
        if (i < n) {
            x.push(nums[i]);
        } else {
            y.push(nums[i]);
        }
    }
    for (let i = 0; i < n; i++) {
        result.push(x[i]);
        result.push(y[i]);
    }

    return result;
};

shuffle([1, 2, 3, 4, 5, 6, 7, 8], 4)