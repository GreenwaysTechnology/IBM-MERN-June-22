//parameters and args

//name is arg
//default arg : es 6 features 
function sayHello(name = 'defaultValue') {
    //console.log(`Hello ${name || 'default'}`) //es 5 feature to provide default value
    console.log(`Hello ${name}`)
}
//parameter -Subramanian
sayHello('Subramanian ')
sayHello() //undefined

function multiply(a = 0, b = 0) {
    let c = a * b;
    console.log(c);
}
multiply(10, 2)
multiply()


