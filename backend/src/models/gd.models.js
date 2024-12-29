// Graphics Designing

import mongoose, { Schema } from 'mongoose';


const GdSchema= new Schema(
    {
        designingCharges :{
         
                type:String,
                required:true,
            },
        price:{
         
                type:String,
                required:true,
            },
      
    },
    {
    timestamps:true
})

export const Gd=mongoose.model("Gd",GdSchema)