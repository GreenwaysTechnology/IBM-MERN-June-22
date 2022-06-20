//without destructuring
// function printEmployee(employee) {
//     //print employee 
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`City ${employee.address.city}`)
// }

//with es 6 destructuring concepts
// function printEmployee(employee) {
//     //destructuring
//     //let or const {}= employee
//     const { id, name, address } = employee
//     //print employee 
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${address.city}`)
// }

//nested object destructuring
// function printEmployee(employee) {
//     //destructuring
//     //let or const {}= employee
//     const { id, name, address: { city } } = employee
//     //print employee 
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
// }

// function printEmployee({ id, name, address: { city } }) {
//     //print employee 
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
// }

const printEmployee = ({ id, name, address: { city } }) => {
    //print employee 
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
printEmployee({
    id: 1,
    name: 'Ram',
    address: {
        city: 'Coimbatore'
    }

})