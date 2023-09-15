const express=require('express')
const Task=require('../models/Tasks')
const router = express.Router()
const multer=require('multer')
//ADD
router.post('/add-task',multer().none(),(req,res) => {
    console.log(req.body);
    const task=new Task({
        title:req.body.title,
        body:req.body.body
    });
    task.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})
//update
router.put('/update-task/:id',multer().none(), (req, res) => {
    const taskId = req.params.id;
  
    Task.findById(taskId)
      .then((task) => {
        if (!task) {
          return res.status(404).json({ message: "Task not found" });
        }
  
        // Update the task properties
        task.title = req.body.title;
        task.body = req.body.body;
  
        // Save the updated task
        return task.save();
      })
      .then((result) => {
        res.json(result); // Return the updated task
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Error updating task" });
      });
  });
//Delete
router.delete('/delete-task/:id',(req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})
//all tasks
router.get('/all-tasks',(req,res) => {
    Task.find()
        .then((result=>{
            res.send(result)
        }))
        .catch((err)=>{
        console.log(err)
        })
})
//single task
router.get('/single-task/:id',(req,res)=>{
    Task.findById(req.params.id)
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
})
module.exports=router