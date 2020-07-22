/**
 * @param {string} str
 * @return {number}
 */
var countBrackets = function (str) {
    let counter = {
        rightBrackets: 0,
        leftBrackets: 0,
        allBrackets: 0
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            counter.rightBrackets += 1;
            counter.allBrackets += 1;
        } else {
            counter.leftBrackets += 1;
            counter.allBrackets += 1;
        }

    }
    console.log(counter);
};

countBrackets("(((())))")