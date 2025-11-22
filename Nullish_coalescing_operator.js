
function showMarks(mark) {
    let message = mark || "Absent";
    console.log(message);
}

showMarks(15);
// mark se 0 paiche but Absent output show
showMarks(0);

// solve?


// bug is || 

// solve is ??

// ?? is Nullish Coalescing Operator


function showMarks(mark) {
    let message = mark ?? "Absent";
    console.log(message);
}


// mark check only null and undefine niye kaj kore not 0 ba ""

// Null
const name = null;

const result = name ?? "Guest";
console.log(result);  // "Guest"


// Undefine
let age;

const userAge = age ?? 18;
console.log(userAge); // 18


// difference between || and ??

const count = 0;

console.log(count || 10); // 10   (because 0 is falsy)
console.log(count ?? 10); // 0    (because 0 is not null/undefined)
