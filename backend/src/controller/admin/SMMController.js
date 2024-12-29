// Social media marketing handling

import { Smm } from "../../models/smm.model.js";
import { SmmFav } from "../../models/smmFav.model.js";
import { ApiError } from "../../utils/Apierror.utils.js";


const addNSMMFav=async(req,res)=>{
    try {
        const { dailyCharges,monthlyCharges, maxReach}=req.body

        
        
        const newProduct=new SmmFav({
            dailyCharges:dailyCharges,
            monthlyCharges:monthlyCharges, 
            maxReach:maxReach
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

const addNewSMM=async(req,res)=>{
    try {
        const { dailyCharges,monthlyCharges, maxReach}=req.body

        console.log(dailyCharges);
        
        const newProduct=new Smm({
            dailyCharges:dailyCharges,
            monthlyCharges:monthlyCharges, 
            maxReach:maxReach
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

const fetchSMM=async(req,res)=>{
    try {
        const listOfProduct=await Smm.find({

        })
        res.json({
            success:true,
            data:listOfProduct
        })
    } catch (error) {
        throw new ApiError(401, error.message)
    }
}

const deleteSmm=async(req,res)=>{
    try {
        const {id}=req.params;
        const product =await Smm.findByIdAndDelete(id);

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

export {addNewSMM,fetchSMM,deleteSmm,addNSMMFav}