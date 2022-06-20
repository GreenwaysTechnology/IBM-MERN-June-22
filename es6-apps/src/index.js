

class OrderService {

    findOrders() {
        return 'find Orders'
    }
    save() {
        return 'save'
    }
    remove() {
        return 'remove'
    }
}
//how to create object 
// let orderService = new OrderService()
// console.log(orderService.findOrders())

let { findOrders, save, remove } = new OrderService()
console.log(findOrders(),save(),remove())