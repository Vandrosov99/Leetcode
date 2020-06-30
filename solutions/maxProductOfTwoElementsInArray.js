/**
 * @param {number[]} nums
 * @return {number}
 */
//1464



var maxProduct = function (nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                temp = nums[j]
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    console.log(nums)
    let max1 = nums[nums.length - 1];
    let max2 = nums[nums.length - 2];
    return (max1 - 1) * (max2 - 1)
};

maxProduct([5, 3, 1, 2]);