const mongoose=require('mongoose')

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

const Category=mongoose.model('category',Categoryschema);

module.exports=Category 