//object creation using function 

//es 5 style of declaring class
function Employee(id = 0, name = '') {
    //state: instance variables
    this.id = id
    this.name = name
    //instance methods
    this.calculateSalary = function () {
        return 100
    }
}
// create 
//let is keyword
//emp is reference variable which points objectF
//new is keyword -  memory allocation operator
// Employee() -  function call (Constructor call)
let emp = new Employee(10, 'Subramanian')
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary()}`)


//es 6 way of declaration 
class Customer {
    //this.invoice : this keyword cant be used inside class directly
    //constructor function :
    constructor(id = 0, name = '') {
        //state: instance variables
        this.id = id
        this.name = name
    }
    //instance methods
    calculateTax() {
        return 100
    }
    //arrow functions are allowed
    calculateInvoice = () => 10
}

//there no difference in object creation
let customer = new Customer()
