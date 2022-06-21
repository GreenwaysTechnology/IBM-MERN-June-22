//link file 
import { firstName, lastName, salary, isActive, getValue, list } from './util'

//no {} braces because export default
import CustmerService from './CustomerService'

console.log(firstName, lastName, salary, isActive, getValue(), list)

let customerService = new CustmerService()
console.log(customerService.findAll())
