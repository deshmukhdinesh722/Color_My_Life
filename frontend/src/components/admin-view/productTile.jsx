import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'

function AdminProductTile({product ,setFormData,setCurrentEditedId,setOpenCreateProductDialog,handleDelete}) {
    return (
        <Card className='w-full max-w-sm mx-auto'>
            <div >
            <div className='relative '>
                <img src={product?.image} alt={product?.title} className='w-full h-[300px] object-cover rounded-t-lg'/>
            </div>
            </div>
        <CardContent>
        <h2 className='text-xl font-bold mb-2 '>{product?.title} </h2>  
        <h2 className='text-xl font-semibold mb-2 '>ID : {product?._id.slice(6-9)}</h2>  
        <div className="flex justify-between items-center mb-2 "> 
            <span className='text-lg font-semibold text-primary'>₹{product?.price}
            </span>
            </div>  
        </CardContent>
        <CardFooter className='flex justify-between items-center'>
            <Button onClick={()=>{
                setOpenCreateProductDialog(true)
                setCurrentEditedId(product?._id)
                setFormData(product)
                
                
            }} className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
                Edit
            </Button>
            <Button onClick={()=> handleDelete(product?._id)} className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
                Delete
            </Button>
        </CardFooter>
        </Card>
     
    )
}

export default AdminProductTile
