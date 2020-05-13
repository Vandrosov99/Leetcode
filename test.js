// let user = {
//     sayHi: function () {
//         console.log(this);
//     }
// };

// user.sayHi()

let user = {
    sayHi: function () {
        console.log(this);
    }
}
user.saybye = user.sayHi;
(user.saybye)()

// user.saybye();