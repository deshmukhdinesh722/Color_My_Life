import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Heart, HeartIcon, Linkedin, ThumbsUp, ThumbsUpIcon } from 'lucide-react'

function HomeProductTile({product,handleGetProductDetails}) {
    const [counter,setCounter]= useState(0)
    function like(){
        setCounter(counter+1)
        if(counter %2 ===0){
            const liked=document.getElementById(product?._id).style.color='red'; 
            console.log(liked);
        }
        else{
            const unLiked=document.getElementById(product?._id).style.color='black'; 
            console.log(unLiked);
        }
        
       
        
        
    }
    return (
        <Card className='w-50 max-w-sm mx-auto'>
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
                </div>
                <CardContent className='p-4 '>
                    
                   <h2 className='flex flex-col-2 gap-5 text-xl font-bold mb-2'>
                        <HeartIcon id={product?._id} onClick={()=>like()} className='cursor-pointer '/> {product?.title}
                    </h2>
                </CardContent>
             
           
               
        </Card>
    )
}

export default HomeProductTile
