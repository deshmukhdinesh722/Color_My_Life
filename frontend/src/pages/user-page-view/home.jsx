import React, { useEffect, useState } from 'react'

import abc from '../../assets/abc.png'
import two from'../../assets/two.png'
import three from'../../assets/three.jpg'
import four from'../../assets/four.avif'
import five from'../../assets/five.jpg'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRightIcon, Sandwich } from 'lucide-react'
import UserProductTile from '@/components/user-page-view/productTile'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProductsHome, fetchProductDetails, fetchProductDetailsHome } from '@/store/userProductSlice'
import { addToCart, fetchCart } from '@/store/cartSlice'
import HomeProductTile from '@/components/user-page-view/homeProductTile'
import { useNavigate } from 'react-router-dom'
import ProductDetails from '@/components/user-page-view/productDetails'
import HomeProductDetails from '@/components/user-page-view/homeProductDetails'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'


function AppHome() {
        const [openDetails,setOpenDetails]=useState(false)
    
    const [currentSlide,setCurrentSlide]=useState(0);
    const slides=[three,four,two,five]
    const {productsList ,productDetails}=useSelector(state=> state.userProduct)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const date=new Date()

    const services=['Logo Design','Poster Ads','Flyer','Motion Graphics','Digital Invites','Social Media Post','Festive Banners'
        ,'Brouhers','Menu','Bussiness Card'
    ]

    function handleGetProductDetails(id){
      console.log(id);
      
        dispatch(fetchProductDetailsHome(id))
        
        
    }
    useEffect(()=>{
    if(productDetails !==null){
        setOpenDetails(true)
    }
    },[productDetails])
 
    useEffect(()=>{
const timer=setInterval(()=>{
    setCurrentSlide(pre => (pre +1) % slides.length)
},3000)
return ()=> clearInterval(timer)
    },[])
    return (

       
<div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
<div className="relative w-full h-[360px] lg:h-[600px] overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100">
    {
        slides.map((slides,index)=>
        <img 
        src={slides}
        key={index}
        className={`${index === currentSlide ?'opacity-100': 'opacity-0'} absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
        />)
    }
    <Button onClick={()=>{setCurrentSlide(prevslide => (prevslide - 1 +slides.length)% slides.length)}} variant='outline' size ='icon' className='absolute top-1/2 left-4 transform -translate-y-1/2'>
        <ChevronLeft className='w-4 h-4'/>
    </Button>
    <Button  onClick={()=>{setCurrentSlide(prevslide => (prevslide + 1 )% slides.length)}}  variant='outline' size ='icon' className='absolute top-1/2 right-4 transform -translate-y-1/2'>
        <ChevronRightIcon className='w-4 h-4'/>
    </Button>
  </div>
  <section className='py-12 bg-gray-50 '>
    <div className="container mx-auto px-4">
    <h2 className='text-3xl lg:text-4xl text-center font-extrabold text-cyan-900 mt-6 mb-2  '>
            OUR DESIGNS
        </h2>
    <p className='text-center font-semibold text-cyan-950 mb-6'>Our Creativity !!</p>
    </div>
    <div className=" m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2">
  {productsList && productsList.length > 0
    ? productsList.map((item) => (
        <HomeProductTile product={item} handleGetProductDetails={handleGetProductDetails} />
      ))
    : <p><center>see our gallery !!</center></p>}
</div>
<div className="container mx-auto px-4">
        <h2 className='text-3xl text-center text-cyan-900 '>
            <Button onClick={()=> navigate('/user-page/listing')} className='  w-40' variant='outline' >
<h1 className='text-cyan-800'>View More</h1>
</Button>
        </h2>
    </div>

<HomeProductDetails open={openDetails} setOpen={setOpenDetails} ProductDetailsInfo={productDetails}/>

  </section>
  <section className='py-12  items-center  bg-gray-50 '>
  <div className="container mx-auto px-4">
        <h2 className='text-3xl lg:text-4xl text-center font-extrabold text-cyan-900 mb-2'>
            OUR SERVICES
        </h2>
    <p className='text-center font-semibold text-cyan-950 mb-6'>We Will Serve You What You Need !!</p>

    </div>
    <Carousel  className="lg:w-[1200px] w-[225px] ml-16 lg:ml-48  ">
      <CarouselContent className="-ml-1 ">
        {services.map((item) => (
          <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/4 shadow-md text-center">
            <div className="p-1">
              <Card >
                <CardContent className="flex bg-gradient-to-r from-blue-50 to-indigo-100  aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold text-cyan-950">{item}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
 
<div className="container mx-auto px-4 mt-6">
        <h2 className='text-3xl text-center text-cyan-900 '>
            <Button onClick={()=> navigate('/user-page/package')} className='  w-40' variant='outline' >
<h1 className='text-cyan-800'>More Details</h1>
</Button>
        </h2>
    </div>

  </section>
</div>
)
}

export default AppHome
