import React, { useState } from 'react'
import abc from '../../assets/abc.png'
import Address from '@/components/user-page-view/address'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsContent from '@/components/user-page-view/cartItemsContent'
import { Button } from '@/components/ui/button'
import { createNewOrder } from '@/store/orderSlice'
import { useToast } from '@/hooks/use-toast'

function HomeCheckout() {
   
    const {cartItems}=useSelector(state=> state.userCartSlice) 
    const {user}=useSelector(state=> state.auth)
    const {approvalURL}=useSelector(state=> state.orderSlice)
    const dispatch=useDispatch()
    const { toast } = useToast();
    const [currentselectedAddress,setCurrentselectedAddress]=useState(null)
    const [isPaymentStart,setIsPaymentStart]=useState(false)

    const total= cartItems && cartItems.items && cartItems.items.length>0 ? 
    cartItems.items.reduce((sum,currentItem) => sum +(
         currentItem?.price )* currentItem?.quantity ,0
    )
    :0

    function handleInitialPayaplPayment(){
     
        if (cartItems.length === 0) {
            toast({
              title: "Your cart is empty. Please add items to proceed",
              variant: "destructive",
            });
      
            return;
          }
          if (currentselectedAddress === null) {
            toast({
              title: "Please select one address to proceed.",
              variant: "destructive",
            });
      
            return;
          }

        const orderData={
            
        userId:user?.id,
        cartId:cartItems?._id,
        cartItems:cartItems.items.map (item=>({
            productId:item?.productId,
            title:item?.title,
            image:item?.image,
            price:item?.price,
            quantity:item?.quantity
        })),
        addressInfo:{
            addressId:currentselectedAddress?.id,
            address:currentselectedAddress?.address,
            phone:currentselectedAddress?.phone,
            notes:currentselectedAddress?.notes
        },
        orderStatus:'pending',
        paymentMethod :'paypal',
        paymentStatus:'pending',
        totalAmmount:total,
        orderDate:new Date().toLocaleString(),
        orderUpdateDate: new Date().toLocaleString(),
        paymentId:'',
        payerId:''
    }

    dispatch(createNewOrder(orderData))
    .then((data)=>{
        if(data?.payload?.success){
            setIsPaymentStart(true)

        }
        else{
            setIsPaymentStart(false)
        }
        
    })
     if(approvalURL){
        window.location.href=approvalURL
     }   
    }
    return (
        <div className="flex flex-col">
            <div className='relative h-[425px] w-full overflow-hidden items-center '>
                <img src={abc} className='h-[350px] w-[350px] object-cover object-center ' alt="" />

            </div>
         
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 p-5">
                <Address setCurrentselectedAddress={setCurrentselectedAddress}/>
                <div className="flex flex-col gap-6">
                    {
                        cartItems && cartItems.items && cartItems.items.length >0 ?
                        cartItems.items.map(item=> 
                           
                            <div className="mt-8 space-y-4">
                              <CartItemsContent cartItems={item}/>   
            <div className="flex justify-between">
                <span className='font-bold'>
                    Total
                </span>
                <span className='font-bold'>
                    ₹{total}
                </span>
            </div>
        </div>
                        )
                        :null
                    }


     <div className="mt-4 w-full">
     <center className='text-muted-foreground'>NEED ADDRESS TO CONFIRM ORDER</center> 
     <center className='text-muted-foreground'>IF YOU HAVE ALREADY ADDED ADDRESS THEN YOUR ORDER IS SENT TO ADMIN !!</center> 

</div>
                </div>


            </div>

        </div>
        
    )
}

export default HomeCheckout
