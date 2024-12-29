import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'
import { SelectSeparator } from '../ui/select'
import { LucideRemoveFormatting, StarHalfIcon, StarIcon, StarOffIcon } from 'lucide-react'
import { addToCart, fetchCart } from '@/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function ProductDetails({open,setOpen,ProductDetailsInfo}) {

    const  dispatch=useDispatch()
const {user}= useSelector(state=> state.auth )

    function handleAddToCart(id){
        console.log(id);
        dispatch(addToCart({
            userId:user?.id,
             productId:id,
             quantity:1
        })).then((data)=>{
            if(data?.payload?.success){
                dispatch(fetchCart(user?.id))
                console.log(cart);
                
            }
         
    
        })
       
        
    
    }
    return (
        <Dialog open ={open} onOpenChange={setOpen}>
            <DialogContent className='lg:grid lg:grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg::max-w-[70vw]'>
                <div className="realative overflow-hidden rounded-lg">
                    <img
                    src={ProductDetailsInfo?.image}
                    alt={ProductDetailsInfo?.title}
                    width={800}
                    height={600}
                    className='aspect-square w-full object-cover'
                    />
                </div>
                <div className=""> 
                    <div>
                        <h1 className='text-4xl font-extrabold'>
                            {ProductDetailsInfo?.title}
                        </h1>
                        <p className='text-muted-foreground lg:text-3xl sm:text-[12px]'>
                            {ProductDetailsInfo?.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                    <h1 className='text-2xl font-bold text-primary'>
                            ₹{ProductDetailsInfo?.price}
                        </h1>
                        <h1 className='text-2xl font-extrabold'>
                            {ProductDetailsInfo?.category}
                        </h1>
                    </div>
                    <div className='mt-5'>
                    <Button className='w-full bg-orange-800' onClick={()=> handleAddToCart(ProductDetailsInfo?._id)}>Add to Cart</Button>
                    </div>
                   
                </div>
                
            </DialogContent>
        </Dialog>
    )
}

export default ProductDetails
