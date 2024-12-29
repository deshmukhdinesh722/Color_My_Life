import { Cart } from "../../models/cart.model.js";
import { User } from "../../models/user.models.js";


const fetchAllCartAdmin= async (req, res) => {
    try {
      
  
  
      const cart = await Cart.find().populate({
        path: "items.productId",
        select: "image title price",
      });
  
      if (!cart) {
        return res.status(404).json({
          success: false,
          message: "Cart not found!",
        });
      }
  
    
  console.log(cart);
  
      res.status(200).json({
        success: true,
        data: cart
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error",
      });
    }
  };

const fetchAllUsers=async(req,res)=>{
    try {
        const listOfProduct=await User.find({

        })
        res.json({
            success:true,
            data:listOfProduct
        })
    } catch (error) {
        throw new ApiError(401, error.message)
    }
}
const orderDetails=async(req,res)=>{
    try {
      const {userId,userName}=req.params;

    
      
      const orders=await Cart.find({userId})

      if(!orders){
          return res.json({
              success:false,
          message:'Orders not found' })
      }
      else{
          return res.json({
              success:true,
              data:orders
          })
      }
    } catch (error) {
      console.log(error);
      
    }
  }
export {fetchAllCartAdmin,fetchAllUsers,orderDetails}