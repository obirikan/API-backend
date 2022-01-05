const mongoose=require('mongoose')

//PRODUCTSCHEMA
const Productschema=new mongoose.Schema({
    productName:{
    type:String,
    required:true,
    },
    productDesc:{
    type:String,
    required:true  
    },
    productCategory:{
    type:String,
    required:true
    },
    productPrice:{
    type:Number,
    required:true,
    },
    productImage:{
    type:String,
    required:true,
    }

})
const Product=mongoose.model('products',Productschema);
module.exports=Product;