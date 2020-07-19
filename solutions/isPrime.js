//  first TRY
// function isPrime(num) {
//     if (num > 0) {
//         let count = 0;
//         for (let i = 1; i <= num; i++) {
//             if (num % i == 0) {
//                 count++;
//             }
//         }
//         if (count < 3) {
//             return true;
//         } else {
//             return false;
//         }
//     } else if (num < 0) {
//         return false;
//     } else {
//         return false;
//     }
// }

// Second Try
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}