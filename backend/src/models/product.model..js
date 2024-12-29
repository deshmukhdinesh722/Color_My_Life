import mongoose, { Schema } from "mongoose";

const productSchema=new Schema({
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    }, 
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }, 
    price:{
        type:Number,
        required:true,
    },
},{
    timestamps:true
})

export const Product=mongoose.model("Product",productSchema)