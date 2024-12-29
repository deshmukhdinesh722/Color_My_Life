// digital arts


import mongoose, { Schema } from 'mongoose';


const DigitalSchmna= new Schema(
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

export const Digital=mongoose.model("Digital",DigitalSchmna)