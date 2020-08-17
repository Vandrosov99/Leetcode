/**
 * @param {string[][]} paths
 * @return {string}
 */
//1436
var destCity = function (paths) {
    let result = ""
    for (let i = 0; i < paths.length; i++) {
        for (let j = 0; j < paths[i].length; j++) {

            if (j == paths[i].length - 1) {
                result = paths[i][j]
            }
        }
    }

    return result;
};

destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"]
]);