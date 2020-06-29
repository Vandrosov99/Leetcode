/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
//1450
var busyStudent = function (startTime, endTime, queryTime) {
    let result = 0;
    if (startTime.length !== endTime.length) {

        return 0;
    } else {

        for (let i = 0; i < startTime.length; i++) {
            if (endTime[i] >= queryTime && startTime[i] <= queryTime) {
                result++;
            }
        }

        return result;
    }
};