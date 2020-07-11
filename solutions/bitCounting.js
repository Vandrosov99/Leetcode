var countBits = function (n) {
    // Program Me
    count = 0;
    doubleDigit = n.toString(2);
    for (let i = 0; i < doubleDigit.length; i++) {
        if (doubleDigit[i] == 1) {
            count++;
        }
    }
    return count;
};