/**
 * @param {string} address
 * @return {string}
 */
// 1108
let defangIPaddr = function (address) {
    address = address.split('.')
    newIp = address.join("[.]")
    return newIp;
};
// console.log(defangIPaddr(""))
