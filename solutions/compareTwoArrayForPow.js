function comp(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    } else {
        array1.sort(function (x, y) {
            return x - y;
        })
        array2.sort(function (x, y) {
            return x - y;
        })
        for (let i = 0; i < array1.length; i++) {
            console.log(`${array1[i]} : ${Math.pow(array1[i],2)}`)
            if (Math.pow(array1[i], 2) != array2[i]) {
                return false;
            }
        }
        return true;
    }
}