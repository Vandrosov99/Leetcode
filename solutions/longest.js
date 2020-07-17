function longest(s1, s2) {

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    text = "";
    // if (s1.length > s2.length) {
    //     len = s1.length;
    // } else {
    //     len = s2.length;
    // }
    for (let i = 0; i < s1.length; i++) {
        if (text.includes(s1[i])) {
            continue;
        } else {
            text = text + s1[i];
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (text.includes(s2[i])) {
            continue;
        } else {
            text = text + s2[i];
        }
    }
    // console.log("----");
    // console.log(text)
    // console.log("----");
    textArr = text.split("");
    textSort = textArr.sort();
    textString = textSort.join("");
    console.log(textString);
    return text;
}
longest("aretheyhere", "yestheyarehere");

// text = "aeowxy";
// console.log(text.includes('a'));