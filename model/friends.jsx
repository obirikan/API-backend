const mongoose=require('mongoose')

const Friendschema=new mongoose.Schema({
    name:{
    type:String,
    required:true,
        },
    url:{
    type:String,
    required:true  
    },
    description:{
    type:String,
    required:false 
    }

})

const Friendsmodel=mongoose.model('friends',Friendschema);

module.exports=Friendsmodel