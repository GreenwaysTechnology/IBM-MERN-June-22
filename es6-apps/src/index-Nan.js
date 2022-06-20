//NaN

let qty; // undefined
let price = 100; //number

let totalPrice = qty * price
console.log(`Qty ${qty} Price ${price} TotalPrice ${totalPrice}`)

//type conversion

let a = "10" // a value is 10 but its type is string 
let b = 10; //b values 10 but its type is number
let c = a * b  //string * number => (js converts string to number) and starts computation - implicit conversion
console.log(`Implicit conversion - C ${c}`)

//using conversion functions(apis) - parseInt,ParseFlot,Number(), unary+ operator

//parse Function
c = parseFloat(a) * b
console.log(`Explicit conversion Using parseFunctions  - C ${c}`)

//unary + 
c = +a * b
console.log(`Explicit conversion Using Unary +  - C ${c}`)
console.log(`C ${c}`)

//using Number
c = Number(a) * b
console.log(`Explicit conversion Using Number - C ${c}`)
console.log(`C ${c}`)

//NaN - During type conversion
let x = "$10"
let z = 30;
let d = x * z
console.log(`D ${d}`)
