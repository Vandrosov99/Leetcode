function alphabetPosition(text) {
    let result = "";
    UpperCaseText = text.toUpperCase();
    for (let i = 0; i < UpperCaseText.length; i++) {
        let temp;
        let letter = UpperCaseText[i].charCodeAt() - 64;
        if (letter > 26 || letter < 1) {
            continue;
        }
        temp = letter;
        result = result + temp + " ";
    }
    return result.substring(0, str.length - 1);
}