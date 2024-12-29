import mongoose, { Schema } from "mongoose";


const orderSchema=new Schema(
    {
        userId:{
            type:String,
            required:true
        },
        cartId:String
        ,
        cartItems:[
            {
                productId:String,
                title:String,
                image:String,
                price:String,
                quantity:Number
            }
        ],
        addressInfo:
            {
                addressId:String,
                address:String,
                phone:String,
                notes:String
            },
            orderStatus:String,
            paymentMethod:String,
            paymentStatus:String,
            totalAmmount:Number,
            orderDate:Date,
            orderUpdateDate:Date,
            paymentId:String,
            payerId:String
      
    },
    {
        timestamps:true
    })

export const Order= mongoose.model('Order',orderSchema)

