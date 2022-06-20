
//function literal:
/**
 * 
 * literal means value, 
 * let a =10;
 * here 10 is literal, a is variable
 * in js function itself literal.
 * since it is literal, can be assinged to variable
 * The variable can be used to invoke the function
 */

//function is declared and later assigned to a variable

function add(a = 0, b = 0) {
    return a + b;
}
console.log(add(10, 10))

//assign function to a variable
let addFunc = add;
console.log(addFunc(45, 90))

//function is declared and initalized there itself - anonmous function 
//anonmous means function without name.

//anonmous in es 5
let multiply = function (a = 0, b = 0) {
    return a * b
}
console.log(multiply(10,10))
