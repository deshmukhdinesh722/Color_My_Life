import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function UserProductTile({product,handleGetProductDetails,handleAddToCart}) {
    return (
        <Card className='w-full max-w-sm mx-auto'>
            <div onClick={()=>handleGetProductDetails(product?._id)}>
                <div className="relative ">
                    <img
                    src={product?.image}
                    alt={product?.title}
                    className='w-full h-[300px] object-cover rounded-t-lg'
                    />
                    {
                                       product?.price>0? 
                                       <Badge className='absolute top-2 right-2 bg-cyan-700 hover:bg-cyan-800'>
                                           Trending
                                       </Badge>
                                       :null
                                       }
                </div>
                <CardContent className='p-4 '>
                    <h2 className='text-xl font-bold mb-2'>
                        {product?.title}
                    </h2>
                    <div className='flex justify-between items-center mb-2'>
                        <span className='text-sm text-muted-foreground'>
                            {
                                product?.category
                            }
                        </span>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                        <span className='text-xl  font-semibold'>
                           ₹ {
                                product?.price
                            }
                        </span>
                    </div>
                </CardContent>
              
            </div>
              <CardFooter>
                    <Button onClick={()=>handleAddToCart(product?._id)} className='w-full text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
                        PLACE ORDER
                    </Button>
                </CardFooter>
        </Card>
    )
}

export default UserProductTile
