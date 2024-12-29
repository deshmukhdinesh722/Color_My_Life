// Social media marketing handling

import { Smm } from "../../models/smm.model.js";
import { Smph } from "../../models/smph.model.js";
import { ApiError } from "../../utils/Apierror.utils.js";




const addNewSMPH=async(req,res)=>{
    try {
        const { packageS,price}=req.body

        
        
        const newProduct=new Smph({
            packageS:packageS,
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

const fetchSMPH=async(req,res)=>{
    try {
        const listOfProduct=await Smph.find({

        })
        res.json({
            success:true,
            data:listOfProduct
        })
    } catch (error) {
        throw new ApiError(401, error.message)
    }
}

const deleteSMPH=async(req,res)=>{
    try {
        const {id}=req.params;
        const product =await Smph.findByIdAndDelete(id);

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

export {addNewSMPH,fetchSMPH,deleteSMPH}