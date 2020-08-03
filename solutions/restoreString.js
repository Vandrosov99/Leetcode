/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
// 1528
var restoreString = function (s, indices) {
    if (s.length != indices.length) {
        return false;
    } else {
        len = s.length;
        let newStr = [];
        for (let i = 0; i < len; i++) {
            newStr[indices[i]] = s[i];

        }
        console.table(newStr);
    }
};

restoreString(s = "abdc", indices = [0, 1, 3, 2]);