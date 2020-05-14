/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let result = 0;
    arrN = String(n).split("");
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arrN.length; i++) {
        sum += +arrN[i];
        product *= arrN[i];
    }
    result = product - sum;
    return result;
};