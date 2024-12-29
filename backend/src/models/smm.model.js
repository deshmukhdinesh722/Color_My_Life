// Social media handling marketing 

import mongoose, { Schema } from 'mongoose';


const SmmSchema= new Schema(
    {
        dailyCharges:{
         
                type:String,
                required:true,
            },
        monthlyCharges:{
         
                type:String,
                required:true,
            },
        maxReach:{
         
                type:String,
                required:true,
            },
      
    },
    {
    timestamps:true
})

export const Smm=mongoose.model("Smm",SmmSchema)