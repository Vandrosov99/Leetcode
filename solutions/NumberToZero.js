/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps = function (num) {
    let result = 0;

    while (num !== 0) {
        if (num % 2 != 0) {
            num = num - 1;
        }
        else {
            num = num / 2;
        }

        result++;
    }
    return result;
};


// console.log(numberOfSteps(14))