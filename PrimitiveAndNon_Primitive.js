
// non primitive

// Array = []
// Object = {}
// Function = () => {}


//primitive

// Number = 1
// String = ""
// Boolean = true/false
// Undefined = let a;
// Null = let a  = null
// Symbol = const id = Symbol("id");
// BigInt = let largeNumber = 9007199254740991n;


console.log([] == "");
// true
// [] is a non primitive data type and "" is a primitive data type
// if i compare non primitive to primitive data type then primitive data type are convert the non primitive to primitive data type
// means now [] is primitive data type 
// then compare with primitive to primitive data type then result is true


console.log([] == []);
// false

// compare with non primitive to non primitive data type but memory location are different then result is false