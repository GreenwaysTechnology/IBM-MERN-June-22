// has-a 

class Address {
    constructor(street = 'street', city = 'city') {
        this.city = city;
        this.street = city
    }
}

class Employee {
    constructor(id = 0, name = '', address = new Address()) {
        this.id = id
        this.name = name
        //has-a 
        this.address = address
    }
}
let employee = new Employee(100, 'Subramanian', new Address('10th street', 'Coimbatore'))
console.log(`${employee.id} ${employee.name} ${employee.address.city}`);

//literal

let product = {
    id: 1,
    name: 'phone',
    //has-a - nested object 
    category: {
        item: 'Elelectronics'
    }
}
console.log(`Product ${product.id} ${product.name} ${product.category.item}`)