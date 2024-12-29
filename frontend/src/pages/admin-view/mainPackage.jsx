import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

function MainPackage() {
   const navigate=useNavigate()
    return (
       
        <Fragment>
        <div className="mb-5 gap-5 w-full lg:text-2xl justify-end cursor-pointer">
        <h3 onClick={()=> navigate('/admin/package') } className='text-cyan-700'> 1. SOCIAL MEDIA MARKETING CHARGES 🠮
        </h3>

        <h3 onClick={()=> navigate('/admin/gdPackage') } className='text-cyan-700'> 2. GRAPHIC DESIGNING CHARGES 🠮
        </h3>
 
        <h3  onClick={()=> navigate('/admin/smphPackage') } className='text-cyan-700'> 3. SOCIAL MEDIA POST DESIGNING 🠮

        </h3>

        <h3  onClick={()=> navigate('/admin/daPackage') } className='text-cyan-700 '> 4.  CML DIGITAL ARTS STUDIO SERVICES 🠮
        </h3>
            
        </div>





        
    </Fragment>
    )
}

export default MainPackage
