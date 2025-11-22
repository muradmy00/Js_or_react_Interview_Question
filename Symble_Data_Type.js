const symbol = Symbol();
const id = Symbol("id");

// console.log(symbol); ==> Symbol()

// console.log(id) ==> Symbol(id)



const a = Symbol("Hello");
const b = Symbol("Hello")

// console.log(a == b); ==> false

// console.log(a === b); ==> false

// a and b is unique


// but i need same value need the use for()


const m = Symbol.for('myKey');
const n = Symbol.for('myKey');

// console.log(m == n)  ==> true
// console.log(m === n) ==> true


// console.log(Symbol.keyFor(m))  ==> myKey value print


// ***** Object *****

let c = Symbol('c');

let person = {
    name: "Name",
    [c] : 123
}


// console.log(person[c])  ==> 123

// console.log(person.c); ==> undefined




// Access symbol data inside object

let obj = Symbol("obj")

let obj1 = {
    [obj] : 1,
    Name: "Murad",
    age: 26
} 

// **** Not ****

// for( let key in obj1){     // Name , age not obj
//     console.log(key)
// }


// **** Not ****

// console.log(Object.keys(obj1))   ==> ["Name", "age"]
// console.log(Object.values(obj1)) ==> ["Murad" , 26]


// **** Yes ****

// console.log(Object.getOwnPropertySymbols(obj1)) ==> [Symbol(obj)]




