
import { Order } from "../../models/orders.models.js";
import { Product } from "../../models/product.model..js";
import { Cart } from "../../models/cart.model.js";

import { paypal } from "../../utils/paypal.js";

const createOrder=async(req,res)=>{
    try {
        const {userId,cartItems,addressInfo,orderStatus,
            paymentMethod,
            paymentStatus,
            totalAmmount,
            orderDate,
            orderUpdateDate,
            paymentId,
            payerId,
            cartId
        } =req.body;

            const createPayment={
                intent:'sale',
                payer:{
                    payment_method:'paypal'
                },
                redirect_urls:{
                    return_url:'http://localhost:5173/user-page/paypal-return',
                    cancel_url:'http://localhost:5173/user-page/paypal-cancel'
                },transactions:[
                    {
                        item_list:{
                            items:cartItems.map((item)=>({
                                name:item.title,
                                sku:item.productId,
                                price:item.price.toFixed(1),
                                currency:'USD',
                                quantity:item.quantity
                            }))
                        },
                        amount:{
                            currency:'USD',
                            total:totalAmmount.toFixed(1)
                        },
                        description:'description'
                    }
                ]
            }
            paypal.payment.create(createPayment,async(error,paymentInfo)=>{
                if(error){
                    console.log(error);
                    return res.json({
                        success:false,
                        messsage:'Error in payment'
                    })
                    
                }else{
                    const newCretedOrder=new Order({
                        userId,
                        cartId,
                            cartItems,
                            addressInfo,
                            orderStatus,
                            paymentMethod,
                            paymentStatus,
                            totalAmmount,
                            orderDate,
                            orderUpdateDate,
                            paymentId,
                            payerId
                    })
                    await newCretedOrder.save()
                    const approvalURL=paymentInfo.links.find((link)=>link.rel === 'approval_url').href;

                    res.json({
                        success:true,
                        approvalURL,
                        orderId:newCretedOrder._id
                    })
                }
            })
    } catch (error) {
        console.log(error);
        
    }
}


const capturePayment=async(req,res)=>{
    try {
        const { paymentId, payerId, orderId } = req.body;

        let order = await Order.findById(orderId);
    
        if (!order) {
          return res.json({
            success: false,
            message: "Order can not be found",
          });
        }
    
        order.paymentStatus = "paid";
        order.orderStatus = "confirmed";
        order.paymentId = paymentId;
        order.payerId = payerId;
    
        for (let item of order.cartItems) {
          let product = await Product.findById(item.productId);
    
          if (!product) {
            return res.status(404).json({
              success: false,
              message: `Not enough stock for this product ${product.title}`,
            });
          }
    
          product.totalStock -= item.quantity;
    
          await product.save();
        }
    
        const getCartId = order.cartId;
        await Cart.findByIdAndDelete(getCartId);
    
        await order.save();
    
        res.json({
          success: true,
          message: "Order confirmed",
          data: order,
        });

    } catch (error) {
        console.log(error);
        
    }
}
const getAllOrdersByUser = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const orders = await Order.find({ userId });
  
      if (!orders.length) {
        return res.status(404).json({
          success: false,
          message: "No orders found!",
        });
      }
  
      res.json({
        success: true,
        data: orders,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
  };
  
  const getOrderDetails = async (req, res) => {
    try {
      const { id } = req.params;
  
      const order = await Order.findById(id);
  
      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order not found!",
        });
      }
  
      res.status(200).json({
        success: true,
        data: order,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Some error occured!",
      });
    }
  };
export {capturePayment,createOrder,getOrderDetails,getAllOrdersByUser}


// ONLY FOR PRACTICE