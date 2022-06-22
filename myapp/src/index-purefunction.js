//functional programming principle

//1.Pure function 
//function receives the set of args, which should return the same.

//this is function called pure function
function getMessage(message) {
    return message;
}
console.log(getMessage('Hello'))

//is this pure function? this function is called impure function
//side effect: if function changes /modifies the state of the program via arg 
//it cause side effects, if any function causes side effects , which is impure
function add(a,b){
    let c = a + b;
    return c;
}