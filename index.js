const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Friendsmodel = require('./model/friends.jsx')
const cors=require('cors')
require('dotenv').config()he

app.use(cors())
app.use(express.json())

app.delete('/delete/:id',async (req,res)=>{
    const id=req.params.id
    await Friendsmodel.findByIdAndRemove(id).exec();
    res.send('deleted')
})
app.get('/users',async (req,res)=>{
   Friendsmodel.find({},(error,result)=>{
       if(error){
           res.send(error)
       }else{
           res.send(result)
       }
   })
})

app.post('/add', async (req,res)=>{
    let name=req.body.name
    let url=req.body.url
    let description=req.body.description
    res.send('hello')
    const friend=new Friendsmodel({name:name,url:url,description:description})
    await friend.save()
    res.send('ok sent')
})
mongoose.connect('mongodb+srv://kelvin:salvation22@cluster0.iaa1e.mongodb.net/test',{
    useNewUrlParser:true
})
const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`connection is running on ${port}`)
})