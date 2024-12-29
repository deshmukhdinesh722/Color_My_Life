// Social media marketing handling

import { Gd } from "../../models/gd.models.js";
import { ApiError } from "../../utils/Apierror.utils.js";


const addNewGd=async(req,res)=>{
    try {
        const { designingCharges ,price}=req.body

        // console.log(dailyCharges);
        
        const newProduct=new Gd({
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

const fetchGd=async(req,res)=>{
    try {
        const listOfProduct=await Gd.find({

        })
        res.json({
            success:true,
            data:listOfProduct
        })
    } catch (error) {
        throw new ApiError(401, error.message)
    }
}

const deleteGd=async(req,res)=>{
    try {
        const {id}=req.params;
        const product =await Gd.findByIdAndDelete(id);

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

export {addNewGd,fetchGd,deleteGd}