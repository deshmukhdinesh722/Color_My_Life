// Social media marketing handling

import { Digital } from "../../models/digitalArts.model.js";
import { Gd } from "../../models/gd.models.js";
import { ApiError } from "../../utils/Apierror.utils.js";


const addNewDA=async(req,res)=>{
    try {
        const { designingCharges ,price}=req.body

        // console.log(dailyCharges);
        
        const newProduct=new Digital({
            designingCharges :designingCharges,
            price:price
        })
        await newProduct.save();
        res.json({
            success:true,
            data:newProduct
        })
    } catch (error) {
        throw new ApiError(401, error)
    }
}

const fetchDA=async(req,res)=>{
    try {
        const listOfProduct=await Digital.find({

        })
        res.json({
            success:true,
            data:listOfProduct
        })
    } catch (error) {
        throw new ApiError(401, error.message)
    }
}

const deleteDA=async(req,res)=>{
    try {
        const {id}=req.params;
        const product =await Digital.findByIdAndDelete(id);

        if(!product){
            res.json({
                success:false,
                message:'Product not Found'
            })
        }
        res.json({
            siccess:true,
            message:'Product deleted '
        })
    } catch (error) {
        throw new ApiError(401, error.message)
    }
}

export {addNewDA,fetchDA,deleteDA}