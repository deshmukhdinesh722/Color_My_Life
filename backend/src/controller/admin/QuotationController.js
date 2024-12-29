import { Quotation } from "../../models/quatation.model.js";


const addQuotation=async(req,res)=>{
    try {
        const {    userName,
            userId,
            subject,
            sirMam,
            content,
            cost
        }=req.body


        if(!userId || !userName ||!subject || !sirMam || !content || !cost ){
            return res.json({
                success:false,
                message:'invalid data'
            })
        }

        const newQuotation=new Quotation({
            userName:userName,
            userId:userId,
            subject:subject,
            sirMam:sirMam,
            content:content,
            cost:cost
        }) 
        
        await newQuotation.save()

        res.json({
            success:true,
            data:newQuotation
        })
    } catch (error) {
        console.log(error.message);
        
    }
}



const fetchQuatation=async(req,res)=>{
    try {
        const{userId}= req.params
        if(!userId){
            return res.json({
                success:false,
                message:'User Id is required'
            })
        }

        const quatation =await Quotation.find({userId})

        res.json({
            success:true,
            data:quatation
        })
    } catch (error) {
        console.log(error.message);
        
    }
}
const fetchAllQuatationAdmin=async(req,res)=>{
    try {
        
       
        const quatation =await Quotation.find({})
console.log(quatation);

        res.json({
            success:true,
            data:quatation
        })
    } catch (error) {
        console.log(error.message);
        
    }
}
const deleteQuatation=async(req,res)=>{
    try {
        const {quotationId}=req.params
        if(!quotationId){
            return res.json({
                success:false,
                message:'Not found'
            })

            
        } 
        const quatation = await Quotation.findByIdAndDelete({_id:quotationId})
        if(!quatation){
            return res.json({
                success:false,
                message:'Quotation not found'
            })
        }

        res.json({
            success:true,
            message:'Address deletd successfully'
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

export {addQuotation,fetchQuatation,deleteQuatation,fetchAllQuatationAdmin}