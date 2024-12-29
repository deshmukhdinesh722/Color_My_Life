import React, { useEffect, useState } from 'react'
import ProductFilter from './filter'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowUpDownIcon } from 'lucide-react'
import { sortOptions } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '@/store/adminProductSlice'
import { fetchProductDetails, fetchUserFilterProduct } from '@/store/userProductSlice'
import UserProductTile from '@/components/user-page-view/productTile'
import ProductDetails from '@/components/user-page-view/productDetails'
import { addToCart, addToCartA, fetchCart } from '@/store/cartSlice'
import { createSearchParams, useSearchParams } from 'react-router-dom'



function  createSearchParamsHelper(filterParams){
    const queryParams=[]

    for(const [key,value] of Object.entries(filterParams)){
        if(Array.isArray(value) && value.length >0){
            const paramValue=value.join(',')

            queryParams.push(`${key}=${encodeURIComponent(paramValue)}`)
        }
    }
    return queryParams.join('&')
}
function HomeListing() {

    const {productsList ,productDetails}=useSelector(state=> state.userProduct)
    const [filter,setFilter]=useState({})
    const [sort,setSort ]=useState(null)
    const [openDetails,setOpenDetails]=useState(false)
    const{user,email}=useSelector(state=> state.auth)
    const{cart}=useSelector(state=> state.userCartSlice)
    const [searchParams,setSearchParams]= useSearchParams()


    function handleSort(value){
        console.log(value);
        setSort(value)
        
    }
// Actual Filter Logic

    function handleFilter(getCategory,getCurrentOption){
        console.log(getCategory);

        let cpyFilter={...filter};
        const indexOfCurrentSection=Object.keys(cpyFilter).indexOf(getCategory)

        if(indexOfCurrentSection=== -1 ){
            cpyFilter={
                ...cpyFilter,
                [getCategory]:[getCurrentOption]
            }
        }else{
            const indexOfCurrentOption =cpyFilter[getCategory].indexOf(getCurrentOption)

            if(indexOfCurrentOption === -1){
                cpyFilter[getCategory].push(getCurrentOption)
            }
            else{
                cpyFilter[getCategory].splice(indexOfCurrentOption,1)
            }
        }
       
        setFilter(cpyFilter) 

        sessionStorage.setItem('filter',JSON.stringify(cpyFilter))
        // console.log(filter);
        
    }
    useEffect(()=>{
        setSort('low-high')
        setFilter(JSON.parse(sessionStorage.getItem('filter')) || {})
    },[])

    useEffect(()=>{
        if(filter && Object.keys(filter).length >0){
            const createQueryString = createSearchParamsHelper(filter)
            setSearchParams( new URLSearchParams(createQueryString))
        }
        
    },[filter])

    // Fetch list of products
const dispatch=useDispatch()
    useEffect(()=>{
        if(filter !== null && sort !== null )
        dispatch(fetchUserFilterProduct({filterParams:filter,sortParams:sort}))
    },[dispatch ,sort ,filter])


    
    useEffect(()=>{
        setSort('low-high')
        dispatch(fetchCart({userId:user?.id,userName:user?.userName}))
      

        
     
        
    },[])

useEffect(()=>{
if(productDetails !==null){
    setOpenDetails(true)
}
},[productDetails])

function handleGetProductDetails(getCurrentProductId){
    console.log(getCurrentProductId);
    dispatch(fetchProductDetails(getCurrentProductId))
  
    
}

function handleAddToCart(id){
    console.log(id);
    
    dispatch(addToCart({
        userId:user?.id,
        userName:user?.userName,
         productId:id,
         quantity:1
    })).then((data)=>{
        if(data?.payload?.success){
            dispatch(fetchCart({userId:user?.id,userName:user?.userName}))
            console.log(data);
            dispatch(addToCartA({
                userId:user?.id,
                userName:user?.userName,
                productId:id,
                quantity:1
            }))
        }
     

    })
   
    

}


    return (
      
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-100">  
          <ProductFilter filter={filter} handleFilter={handleFilter}/>
        <div className="bg-background w-full grid-cols-5 rounded-lg shadow-sm bg-gradient-to-r from-blue-50 to-indigo-100"> 
    
            <div className="p-4  border-b flex items-center justify-between">
                <h2 className=' text-2xl font-extrabold'>
                    Posts 
                </h2>
                <div className='flex items-center gap-2'>
                    <span className="text-muted-foreground">
                        {productsList.length} Posts
                    </span>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline' size='sm' className='flex items-center gap-1'>

                            <ArrowUpDownIcon className='h-4 w-4'/>
                            <span>Sort By </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent  align='end' className='w-[200px]'>
                        <DropdownMenuRadioGroup value={sort} onValueChange={handleSort} >
                            {
                                sortOptions.map((items)=>(<DropdownMenuRadioItem value={items.id} key={items.id}>
                                    {items.label}
                                </DropdownMenuRadioItem>))
                            }
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
              
                </div> 
                <div className=" m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
  {productsList && productsList.length > 0
    ? productsList.map((item) => (
        <UserProductTile key={item.id} product={item} handleGetProductDetails={handleGetProductDetails} handleAddToCart={handleAddToCart}/>
      ))
    : <p>No products found</p>}
</div>
 
        </div>
       <ProductDetails open={openDetails} setOpen={setOpenDetails} ProductDetailsInfo={productDetails}/>
        </div>
       
        
    )
}

export default HomeListing
