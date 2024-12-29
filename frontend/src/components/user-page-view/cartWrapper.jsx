import React from 'react'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Button } from '../ui/button'
import CartItemsContent from './cartItemsContent'
import { useNavigate } from 'react-router-dom'


function CartWrapper({setOprnCartSheet,cartItems}) {
    console.log(cartItems);
    
    const navigate=useNavigate()
    const total= cartItems && cartItems.length>0 ? 
    cartItems.reduce((sum,currentItem) => sum +(
         currentItem?.price )* currentItem?.quantity ,0
    )
    :0
    return (
    <SheetContent className='sm:max-w-md '>
        <SheetHeader>
            <SheetTitle>
                Your Cart
            </SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
            {
                cartItems && cartItems.length>0?
                cartItems.map(item=>
                    <CartItemsContent cartItems={item}/>
                )
                :null
            }
        </div>
        <div className="mt-8 space-y-4">
            <div className="flex justify-between">
                <span className='font-bold'>
                    Total
                </span>
                <span className='font-bold'>
                    ₹{total}
                </span>
            </div>
        </div>
        <center className='text-muted-foreground'>NEED ADDRESS TO CONFIRM YOUR ORDER</center> 
        <Button onClick={()=>{
            navigate('/user-page/checkout')
            setOprnCartSheet(false)
            }} className='w-full mt-6 text-white bg-gradient-to-r from-cyan-600 to-cyan-900'>

            CONFIRM WITH ADDRESS
        </Button>
    </SheetContent>
    )
}

export default CartWrapper
