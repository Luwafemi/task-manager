const express = require('express')
const {getAllTasks, createTask, getSingleTask, updateTask, deleteTask} =require("../controllers/tasks")
const Router = express.Router()


Router.route("/").get(getAllTasks).post(createTask)
Router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = Router