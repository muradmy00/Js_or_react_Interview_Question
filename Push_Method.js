let array = [20,10,30]

let newArray = array.push(40);

// console.log(array); ==> [10, 20, 30, 40]

// console.log(newArray); ==> 4 because push method return a array length



let index = array.indexOf(20);

if (index !== -1) {
    console.log("ache");
    console.log("Index =", index);
} else {
    console.log("nai");
}



// if (array.includes(20)) {
//     console.log("ache");
// } else {
//     console.log("nai");
// }