//anonmous in es 5
let multiply = function (a = 0, b = 0) {
    return a * b
}
console.log(multiply(10, 10))

//Arrow functions
// let sayHello = function () {
//     console.log('Hello')
// }
//simple arrow => (fat arrow)
let sayHello = () => {
    console.log('Hello')
}
sayHello()
//if function has only one line of body, We can remove {}
sayHello = () => console.log('Hello')
sayHello()

//arrow and parameters and args
let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(c)
}
add(1, 2)

//return values and arrow 
let sum = (a = 0, b = 0) => {
    return a * b
}
console.log(sum(10, 10))
//if function has only return statement, we can remove return statement and {}
sum = (a = 0, b = 0) => a * b

console.log(sum(10, 10))

//single arg, no default value, return the same 
let stock = (value) => {
    return value;
}
console.log(stock(10))
//if function has no default value with single arg, and return the same: remove (), remove return statement and {}
stock = value => value * 10
console.log(stock(10))

