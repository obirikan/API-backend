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

//CATEGORYSCHEMA
const Categoryschema=new mongoose.Schema({
    categoryName:{
    type:String,
    required:true,
    },
    categoryDesc:{
    type:String,
    required:true  
    },
    categoryImage:{
    type:String,
    required:true
    },
})

const Product=mongoose.model('products',Productschema);
const Category=mongoose.model('categories',Categoryschema);

module.exports=Product;
module.exports=Category 