//function declaration (defination)
/*
a and b in line 5 are parameters (formal). a and b in line
8 are arguments (actual parameters) passed during the call of the function (invocation)

in  line 9, console is a js object on which the system-defined method log is called on the console object
*/
function add(a, b) {
  console.log(a + b); //explicit call by the consol object
}
// call the add function
add(4, 5); // implicit call by global object
//exponent function declaration
let m = 5;
function expo(n) {
  let m = 2;
  console.log(m);
  return m ** n;
}

//call to exponent function

let expo_return = expo(5);
console.log(expo_return); // pass a argument the return value of expo to log method
console.log(m);
