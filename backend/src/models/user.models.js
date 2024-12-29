import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema=new Schema({

    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
    ,
    role:{
        type:String,
        default:'user'
    }
},{
    timestamps:true
})

// UserSchema.pre("save", async function (next){
//     if(!this.isModified("password")){
//         next()
//     }
//     try {
//         const hashpss=await bcrypt.hash(this.password,10)
//     } catch (error) {
//         next(error)
//     }
// })
const isPasswordCorrect=UserSchema.methods.isPasswordCorrect= async function (password,oppass) {
    return await bcrypt.compare(password,oppass)                     // doni match tr true || false
}

export const User=mongoose.model("User",UserSchema)

export default isPasswordCorrect