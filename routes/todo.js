const express = require('express');
const todo = require('../controllers/todo');

const todorouter = express.Router();

todorouter.get('/', todo.homeController);
todorouter.get('/addtodo', todo.addtodoFormController);
todorouter.get('/update-todo', todo.updatetodoController);
todorouter.get('/deletetodo', todo.deletetodoController);
todorouter.post('/addtodo', todo.addtodoController);
todorouter.post('/update-todo/:id',todo.update_todoController);
todorouter.get('/confirmdelete', todo.deleteController)
module.exports = todorouter;
