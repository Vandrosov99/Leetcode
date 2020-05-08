let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (target - nums[i] == nums[j]) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([1, 2, 5, 0, -5, 100], 5))

