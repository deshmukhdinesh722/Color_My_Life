import mongoose, { Schema } from "mongoose";

const addressSchema=new Schema(
    {
        userId:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        notes:{
            type:String,
            //required:true
        }
    },
    {timestamps:true})

export const Address=mongoose.model('Address',addressSchema)