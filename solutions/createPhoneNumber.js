function createPhoneNumber(numbers) {
    strNumber = numbers;
    let result = "(";
    for (let i = 0; i < strNumber.length; i++) {
        if (i < 3) {
            result = result + strNumber[i];
            if (i == 2) {
                result = result + ") ";
            }
        } else if (i < 6) {
            result = result + strNumber[i];
            if (i == 5) {
                result = result + "-";

            }
        } else {
            result = result + strNumber[i];

        }
    }
    return result;
}