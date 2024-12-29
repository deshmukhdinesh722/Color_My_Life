import React from 'react'
import { Button } from '../ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, updateCart } from '@/store/cartSlice'
import { useToast } from '@/hooks/use-toast'

function CartItemsContent({cartItems}) {
    const dispatch = useDispatch()
    const {user}= useSelector(state=> state.auth)
    const {toast} = useToast()

    function handleUpdateQty(cartItems,type){
        dispatch(updateCart({
            userId:user?.id,
            userName:user?.userName,
            productId: cartItems?.productId,
            quantity: 
            type=== 'plus'
            ? cartItems?.quantity +1
            : cartItems?.quantity -1
        })).then((data)=>{
            if(data?.payload?.success){
                toast({
                    title:'Cart item is updated'
                })
            }
        })
    }

    function handleDeleteCart(cartItems){
dispatch(deleteCart({userId:user?.id,productId:cartItems.productId,userName:user?.userName}))


    }
    return (
   <div className="flex items-center space-x-4">
    <img src={cartItems?.image}
    alt={cartItems?.title}
    className='h-20 w-20 rounded object-cover'
    />
    <div className="flex-1">
        <h3 className='font-extrabold'>
            {cartItems?.title}
        </h3>
        <div className="flex gap-3 items-center mt-1">
            <Button disabled={cartItems?.quantity ===1}
            onClick={()=>handleUpdateQty(cartItems,'minus')} variant='outline' size='icon' className='h-8 w-8 rounded'>
                <Minus className='w-4 h-4'/>
                <span className='sr-only'>Decrease</span>
            </Button>
            <span className='text-foreground'>
                {cartItems?.quantity}
            </span>
            <Button  onClick={()=>handleUpdateQty(cartItems,'plus')} variant='outline' size='icon' className='h-8 w-8 rounded'>
                <Plus className='w-4 h-4'/>
                <span className='sr-only'>Decrease</span>
            </Button>
        </div>
    </div>
    <div className="flex flex-col items-end">
        <p className=" flex gap-3 font-semibold">
            ₹ {(cartItems.price * cartItems.quantity).toFixed(1)}
             <Trash2 onClick={()=> handleDeleteCart(cartItems)} className='cursor-pointer mt-1 ' size={20} />
        </p>
       
    </div>
   </div>
    )
}

export default CartItemsContent
