const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Product= require('./model/friends.jsx')
const Category= require('./model/friends.jsx')
const cors=require('cors')
require('dotenv').config() 

app.use(cors())
app.use(express.json())

// app.delete('/delete/:id',async (req,res)=>{
//     const id=req.params.id
//     await Friendsmodel.findByIdAndRemove(id).exec();
//     res.send('deleted')
// })

//PRODUCT___SECTION
app.get('/viewProducts',async (req,res)=>{
   Product.find({},(error,result)=>{
       if(error){
           res.send(error)
       }else{
           res.send(result)
       }
   })
})
app.post('/addProducts', async (req,res)=>{
    let productName=req.body.productName
    let productDesc=req.body.productDesc
    let productCategory=req.body.productCategory
    let productPrice=req.body.productPrice
    let productImage=req.body.productImage

    res.send('added products')
    const product1=new Product({
        productName:productName,
        productDesc:productDesc,
        productCategory:productCategory,
        productPrice:productPrice,
        productImage: productImage,
    })
    await product1.save()
    res.send('ok sent')
})
//CATEGORY__SECTION
app.get('/viewCategory',async (req,res)=>{
    Category.find({},(error,result)=>{
        if(error){
            res.send(error)
        }else{
            res.send(result)
        }
    })
 })
 app.post('/addCategory', async (req,res)=>{
     let categoryName=req.body.categoryName
     let categoryDesc=req.body.categoryDesc
     let categoryImage=req.body.categoryImage
 
     res.send('added category')
     const category1=new Category({
         categoryName:categoryName,
         categoryDesc:categoryDesc,
         categoryImage:categoryImage,
     })
     await category1.save()
     res.send('ok sent')
 })
//DATABASE____CONNECTION
mongoose.connect('mongodb+srv://kelvin:salvation22@cluster0.iaa1e.mongodb.net/afram',{
    useNewUrlParser:true
})
const port=process.env.PORT || 5000

app.listen(process.env.PORT || 5000,()=>{
    console.log(`connection is running on ${port}`)
})