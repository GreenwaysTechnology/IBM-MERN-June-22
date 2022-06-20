//literal object 

let customer = {
    //state
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore',
    //methods
    //way 1 : using es 5 function style
    calculateA: function () {
        return 10
    },
    //way 2 : using es 6 arrow style
    calculateB: () => 10,
    //way 3 : using es 6 class style
    calculateC() {
        return 10
    }
}
console.log(`id ${customer.id} ${customer.name} ${customer.city} ${customer.calculateA()}`)

