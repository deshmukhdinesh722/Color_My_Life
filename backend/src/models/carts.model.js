import mongoose, { Schema } from "mongoose";

const cartSchema=new Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
       userName:{
            type:String,
            required:true
        },
        items:[{
             
            productId:{
                type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
            },

            quantity:{
                type:Number,
                required:true,
                min:1
            }
    
        }

        ]
    },
    {
        timestamps:true
    })

export const Carta=mongoose.model('Carta',cartSchema)

