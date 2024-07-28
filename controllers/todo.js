const Todo = require('../models/Todo');
const moment = require('moment');
const homeController = async (req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        res.locals.moment = moment;
        res.render('index', { title: "Todo App", todos });
    } catch (error) {
        console.log(error.message);
    }
};

const addtodoFormController = (req, res, next) => {
    try {
        res.render('newTodo', { title: 'Add todo' });
    } catch (error) {
        console.log(error.message);
    }
};

const updatetodoController = async (req, res, next) => {
    try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "Missing 'id' query parameter" });
        }

        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ message: "Todo item not found" });
        }

        res.render('updatetodo', { title: "Update todo", todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


const deletetodoController = (req, res, next) => {
    try {
       const  {id} = req.query;
        
        res.render('deletetodo', { title: "delete todo", id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addtodoController = async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        const newTodo = new Todo({ title, desc });
        await newTodo.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const update_todoController = async (req, res, next)=>{
    const {id} = req.params;
    
    const {title, desc} = req.body;
    const todo = await Todo.findById(id);
    if(!todo){
        res.status(404).json({message: "Todo not found"})
    }
    todo.title = title;
    todo.desc = desc;
    await todo.save();
    res.redirect('/')
}

const deleteController = async ( req, res, next)=>{
   try{
    const {id, confirm} = req.query;
    if(confirm=== 'yes'){
        await Todo.findByIdAndDelete(id)
    }
    res.redirect('/')
   }
   
   catch{
    res.status(500).json({message: error.message})
   }
}
module.exports = {
    homeController,
    addtodoFormController,
    updatetodoController,
    deletetodoController,
    addtodoController,
    update_todoController,
    deleteController
};
