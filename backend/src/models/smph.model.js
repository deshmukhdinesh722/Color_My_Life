// Social media page handling marketing 

import mongoose, { Schema } from 'mongoose';


const SmphSchema= new Schema(
    {
        packageS:{
         
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

export const Smph=mongoose.model("Smph",SmphSchema)