const { request } = require('http')
const Todo  = require('../model/Todo')

module.exports = {
createTodo : async (request, response) => {
    try{
        await Todo.create({todo : request.body.todoItem, completed : false})
        console.log('ITEM ADDED TO DATABASE')
        response.redirect('/todos')
    }catch(err){
        console.error(err)
    }
},

getTodo : async (request, response) => {
    try{
        const todoItem = await Todo.find()
        const remainingTodo =  await Todo.countDocuments({completed: false})
        response.render('todo.ejs', { todo : todoItem, left : remainingTodo})
    }catch(err){
        console.log(err)
    }
},
markComplete : async (request, response) => {
    try{
        await Todo.findOneAndUpdate({_id : request.body.markTodo},{
            completed : true
        })

        console.log('Event have been changed')
        response.json('Event is changed')

    }catch(err){
        console.error(err)
    }
},

unMarkTodo: async (request, response) => {
    try{
        await Todo.findByIdAndUpdate({_id : request.body.unMarkTodo},{
            completed: false
        })
        console.log('event rechanged')
        response.json('event rechanged')

    }catch(err){
        console.error(err)
    }

},

deleteTodo : async (request, response) => {
    try {
        await Todo.findOneAndDelete({_id : request.body.item})
        console.log('item deleted')
        response.json('item successfully deleted')
    } catch (error) {
        console.error(error)
    }
}

}
