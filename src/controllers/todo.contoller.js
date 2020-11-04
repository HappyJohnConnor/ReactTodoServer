import { v4 as uuidv4 } from 'uuid';
import db from '../models';

const Todo = db.todo;

exports.getAllTodo = (req, res) => {
  Todo.findAll({
    where: {
      createdBy: req.userId,
    },
  }).then((todos) => {
    res.status(200).send(todos);
  });
};

exports.createTodo = (req, res) => {
  const todoData = req.body;
  Todo.create({
    id: uuidv4(),
    title: todoData.title,
    alerm: null,
    createdBy: req.userId,
  }).then((todo) => {
    res.json(todo);
  });
};

exports.getTodoById = (req, res) => {
  Todo.findByPk(req.body.todoId).then((item) => {
    if (!item) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    res.status(200).send(item);
  });
};

exports.updateTodoById = (req, res) => {
  const todoData = req.body;
  Todo.findByPk(req.body.todoId).then((todo) => {
    todo.update({ ...todoData });
    res.status(200).send();
  });
};

exports.deleteTodo = (req, res) => {
  Todo.destroy({
    where: {
      id: req.body.todoId,
    },
  })
    .then((response) => {
      res.status(200).send(1);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
