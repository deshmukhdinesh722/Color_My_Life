import { Address } from "../../models/address.models.js";


const addAddress=async(req,res)=>{
    try {
        const {userId,address,phone,notes}=req.body
console.log(userId);

        if(!userId || !address || !phone ){
            return res.json({
                success:false,
                message:'invalid data'
            })
        }

        const newAddress=new Address({
            userId:userId,
            address:address,
            phone:phone,
            notes:notes
        }) 
        
        await newAddress.save()

        res.json({
            success:true,
            data:newAddress
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

const editAddress = async (req, res) => {
    try {
      const { userId, addressId } = req.params;
      const formData = req.body;
  
      if (!userId || !addressId) {
        return res.status(400).json({
          success: false,
          message: "User and address id is required!",
        });
      }
  
      const address = await Address.findOneAndUpdate(
        {
          _id: addressId,
          userId,
        },
        formData,
        { new: true }
      );
  
      if (!address) {
        return res.status(404).json({
          success: false,
          message: "Address not found",
        });
      }
  
      res.status(200).json({
        success: true,
        data: address,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error",
      });
    }
  };

const fetchAddress=async(req,res)=>{
    try {
        const{userId}= req.params
        if(!userId){
            return res.json({
                success:false,
                message:'User Id is required'
            })
        }

        const address =await Address.find({userId})

        res.json({
            success:true,
            data:address
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

const deleteAddress=async(req,res)=>{
    try {
        const {userId,addressId}=req.params
        if(!userId || !addressId){
            return res.json({
                success:false,
                message:'both are not found'
            })

            
        } 
        const address = await Address.findByIdAndDelete({_id:addressId,userId})
        if(!address){
            return res.json({
                success:false,
                message:'address not found'
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

export {addAddress,editAddress,fetchAddress,deleteAddress}