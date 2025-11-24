// Question: this function return a value but i need Reference Error without change var to let

function demo() {
  {
    var a = 30;
    var b = 40;
  }
  console.log(a,b)
}

demo();

// Solution
// IIFE function means Immediately Invoked Function Expression
// it's work: ei function ke call kora lage na automatically call hoi () er jonno
function fun() {
    {

        (function IIFE() {
            var a = 10;
            var b = 20;
        })()
    }
    console.log(a, b)
}

fun();

