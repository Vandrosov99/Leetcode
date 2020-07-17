function duplicateCount(text) {
    text = text.toLowerCase();
    let countj = 0;
    let countall = 0;
    console.log(text.length);
    for (let i = 0; i < text.length; i++) {
        console.log("Цикл i: " + i + " text[i] = " + text[i])
        for (let j = 0; j < text.length; j++) {
            console.log("Цикл j : " + j + " text[i] = " + text[i] + " text[j] = " + text[j]);
            if (i != j) {
                if (text[i] == text[j]) {
                    countj++;
                    console.log("countj = " + countj)

                    if (countj == 2) {
                        console.log("идем на выход");
                        countall++;
                        countj = 0;
                        break;
                    }
                }
                if (j == text.length - 1) {
                    countj = 0;
                }
            }
        }
    }
    console.log(countall);
}

duplicateCount("aabbcde11ssds")