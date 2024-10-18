const express = require('express')
const mongoose = require('mongoose')

const app=express()

const port =8080

mongoose.connect('mongodb+srv://khusharora628:AGNskNgJrzQ8WNG1@cluster0.ik1dy.mongodb.net/')
.then(() =>{console.log('mongoose db is conect succesfully');})
.catch((e)=>{console.log(`mongoose db error ${e}`);})


 app.listen(port,()=>{console.log(`server is running ${port}`);})