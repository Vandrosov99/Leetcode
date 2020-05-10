/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function (address) {
    address = address.split('.')
    newIp = address.join("[.]")
    return newIp;
};
// console.log(defangIPaddr(""))
