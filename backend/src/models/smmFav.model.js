import mongoose, { Schema } from "mongoose";
import { type } from "os";

const smmFavSchema= new Schema(
    {
        dailyCharges:{
            type:String,
            required:true
        },
        monthlyCharges:{
            type:String,
            required:true
        },
        maxReach:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    })

export const SmmFav=mongoose.model("SmmFav",smmFavSchema)