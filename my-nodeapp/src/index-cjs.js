const { firstName, salary, skills, calculate } = require('./lib/util')
// const TodoService = require('./services/todoservice')
const { findAll } = require('./services/todoservice')


console.log(firstName, salary, skills, calculate())

// const todoService = new TodoService()
// console.log(TodoService.findAll())
console.log(findAll())