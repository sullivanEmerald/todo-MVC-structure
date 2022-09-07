const express =  require('express')
const router =  express.Router()
const todosController =  require('../controllers/Todos')

router.get('/', todosController.getTodo)
router.post('/createTodos', todosController.createTodo)
router.put('/markComplete', todosController.markComplete)
router.put('/unMarkComplete', todosController.unMarkTodo)
router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router