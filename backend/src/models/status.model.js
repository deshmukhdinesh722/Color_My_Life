// Social media handling marketing 

import mongoose, { Schema } from 'mongoose';


const statusSchema= new Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Cart',
            required:true
        },
       items: [
        {
            status:{
                type:String,
                required:true
              }
        }
       ]
      
},
    {
    timestamps:true
})

export const Status=mongoose.model("Status",statusSchema)