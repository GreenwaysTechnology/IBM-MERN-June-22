//parent
class Account {
    //id
    id = 0
    constructor() {
        console.log('account')
    }
    deposit() {
        return 100;
    }
}
//child class 
class SavingsAccount extends Account {
    constructor() {
        super()// this must be first line of constructor
        console.log('sb account')
    }
    deposit() {
        return 1000 * super.deposit();
    }
}
let sb = new SavingsAccount()
console.log(sb.id, sb.deposit())
