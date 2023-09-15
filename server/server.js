const express=require('express')
const mongoose=require('mongoose')
var cors=require('cors')
const taskRouter=require('./routes/Tasks')
const userRouter=require('./routes/Users')

const app=express()
 
app.use(cors())

 
var CONNECTION_STRING="mongodb+srv://ToDoList:zW6tcDn5leiD2VRo@nodetuts.ntp4vjc.mongodb.net/ToDoList?retryWrites=true&w=majority"
// app.use(express.static('dist'))
app.use('/api',taskRouter)
app.use('/api',userRouter)
app.use(express.urlencoded({extended:false}))
mongoose.connect(CONNECTION_STRING,{useNewUrlParser: true,useUnifiedTopology: true})
    .then((result)=>app.listen(5000,()=>{
        console.log("Connected:5000");
    }))
    .catch((err)=>console.log(err))


//mongoose and mongo sandbox routes


//routes
app.get("/api/test",(req,res)=>{
    console.log("API request received")
    // res.setHeader("Cache-Control", "no-store"); The "no-store" directive tells the browser not to store a cached copy of the response. This can help ensure that you always get fresh data during development.
    res.setHeader("Cache-Control", "no-store");
    res.json({"users":["userOne","userTwo","userThree"]})
})

