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
                type:mongoose.Schema.Types.ObjectId,
                ref:'Cart',
                required:true,
                min:1
            }
    
        }

        ]
    },
    {
        timestamps:true
    })

export const Cartb=mongoose.model('Cartb',cartSchema)

