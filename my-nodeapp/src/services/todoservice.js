const TODOS = require('../mock-data/todos')

class TodoService {

    findAll() {
        //convert sync todos into async using timer
        //return TODOS
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, TODOS)
        })
    }
}
// module.exports = TodoService
module.exports = new TodoService()