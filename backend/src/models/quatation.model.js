

 import mongoose, { Schema } from "mongoose";
 
 const quotationSchema=new Schema(
     {
        userName:{ 
           type:String,
             required:true
         },
         userId:{
              type:mongoose.Schema.Types.ObjectId,
             ref:'User',
             required:true
         },
         subject:{
             type:String,
             required:true
         },
         sirMam:{
             type:String,
             required:true
         },
         content:{
            type:String,
            required:true
        },
         cost:{
            type:String,
            required:true
        },
     },
     {timestamps:true})
 
 export const Quotation=mongoose.model('Quotation',quotationSchema)