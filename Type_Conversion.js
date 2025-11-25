console.log([] == "")

// true because both sides are coerced to the same type (empty string)
// An empty array is converted to an empty string when compared with a string using loose equality (==).
// [].toString() results in "", so the comparison becomes "" == "", which is true.
// "" is primitive and [] is non-primitive, so the non-primitive is converted to primitive for the comparison.


console.log([] == [])
// false because both sides are different references in memory.


if([]){
    console.log("This is true")
}

// true because an empty array is considered a truthy value in JavaScript.


if([] == true) {
    console.log("This is true")
}
else{
    console.log("This is false")
}
// false because when comparing an object (array) to a boolean, the object is first converted to a primitive.
// The empty array converts to an empty string, which is then coerced to 0 when compared to true (which is 1).
// "" is falsy, so it becomes 0.
// So the comparison becomes 0 == 1, which is false.