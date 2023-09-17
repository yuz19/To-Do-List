const express=require('express')
const Users=require('../models/Users')
const router = express.Router()
const multer=require('multer')

///Email-find
router.post('/Email-find',multer().none(),(req,res)=>{
    // console.log(req.body.Email)
    Users.find({Email:req.body.Email})
                .then((result)=>{
                    res.send(result)
                })
                .catch((err)=>{
                    console.log(err)
                })
})

 
//signUp
router.post('/add-user',multer().none(),(req,res)=>{
    const user=new Users({
        UserName:req.body.UserName,
        Email:req.body.Email,
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
//signIn
router.post('/sign-in',multer().none(),(req,res)=>{
    EmailEntre=req.body.Email;
    Users.find({Email:EmailEntre})
                .then((result)=>{

                    res.send(result)
                })
                .catch((err)=>{
                    console.log(err)
                })
})
module.exports=router