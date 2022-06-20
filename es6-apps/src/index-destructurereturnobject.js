//return object 
//here we are printing hardcoded stock value
// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 10000
//     }
// }

//dynamic parameter without destructuring
// function getStock(id = 1, symbol = 'google', qty = 0, price = 0) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }

// function getStock(id = 1, symbol = 'google', qty = 0, price = 0) {
//     //here leftSide(id) is object instance variable
//     //here rightSide(id) is local variable(function arg)
//     /**
//      *  if left side and right is same => make it one :
//      *     */

//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }

const getStock = (id = 1, symbol = 'google', qty = 0, price = 0) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock(1, 'MicroSoft', 100, 1000))