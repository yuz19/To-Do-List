const express=require('express')
const Users=require('../models/Users')
const router = express.Router()
const multer=require('multer')
//signUp
router.post('/add-user',multer().none(),(req,res)=>{
    const user=new Users({
        UserName:req.body.userName,
        Password:req.body.Password
    });
    user.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports=router