/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 771
var numJewelsInStones = function (J, S) {
    let result = 0;

    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < J.length; j++) {
            if (S[i] == J[j]) {
                result++;
            }
        }
    }
    return result;
};

console.log(numJewelsInStones("aA", "aAAbbbb"))