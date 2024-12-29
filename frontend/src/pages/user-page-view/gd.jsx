
import CommanForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {  GDCFormElement,  } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewProduct, deleteProduct, editProduct, fetchProduct } from '@/store/adminProductSlice';
import { addNewGd, deleteGd, fetchGd } from '@/store/gdSlice';
import { ThumbsUp } from 'lucide-react';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';



const initialFormdataOne={
    designingCharges:'',
    price:''
    
}


function Gd() {
    
    const [openCreateDialog,setOpenCreateDialog]=useState(false);
    const [formData,setFormData]=useState(initialFormdataOne)

    const {productList}=useSelector(state =>state.adminGdSlice)

    const [currentEditedId,setCurrentEditedId]=useState(null)

    const [getCurrentProductId,setcurr]=useState()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchGd())
        console.log(productList);
        
    },[dispatch])


    const {toast}=useToast()
    function onsubmit(e) {
        e.preventDefault();
        console.log(formData);
    
        dispatch(addNewGd(formData)).then((data) => {
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchGd())
                console.log(data?.payload?.data);
                
                setOpenCreateDialog(false);
                setFormData(initialFormdataOne);
                toast({
                    title: "Package Added Successfully",
                });
            } else {
                toast({
                    title: "Failed to add product",
                    variant: "destructive",
                });
            }
        });
    }
    
    function handleDelete(getCurrentProductId){
        console.log(getCurrentProductId);
        dispatch(deleteGd(getCurrentProductId))
        .then((data)=>{
            if(data?.payload?.success){
                dispatch(fetchGd())
             
              
            } 
            toast({
                title:'Package deleted please refresh'
            })
        })
        
     }
    return (

        <Fragment>
        <div className="mb-5 gap-5 w-full text-center justify-end">
       
        <Table>
        <TableHeader >
        <TableRow>
              <TableCell  >
              
              </TableCell>
            </TableRow>
            <TableRow >
                  <TableHead className='text-center' >
                    Designing 
                  </TableHead>
             
                  <TableHead className='text-center'>
                    Price
                  </TableHead>
                  
                 
            </TableRow>
         
        </TableHeader>
        <TableBody>
        {productList && productList.length >0 ? 
                    productList.map(productItem=> 
                      
         
                        <TableRow>
                                  <TableCell >
                               { productItem.designingCharges}
                                  </TableCell>
                                  <TableCell>
                              {  productItem.price}/-
                                  </TableCell> 
                                 
                                  <TableCell>
                                    <div className='lg:flex  gap-2'>  
                          
                            </div>
                               
                                  </TableCell>
                              </TableRow>
                          
                    
                    )
                    :<h1>Not Found data</h1>
        
                   
                   }
             
             </TableBody>
          
            
        
    
      </Table>
   
               
        </div>
      
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
         
        <Sheet open={openCreateDialog} onOpenChange={()=> {
                    setOpenCreateDialog(false)
                    setCurrentEditedId(null)                
                  setFormData(initialFormdataOne)
                }}>
                    <SheetContent side='right' className='overflow-auto'>
                        <SheetHeader>
                            <SheetTitle>
                                {
                                    currentEditedId!==null?
                                    'Update Package':
                                    'Add new Package'
                                }
                            </SheetTitle>
                        </SheetHeader>
                       
                        <div className="py-6">
                            <CommanForm
                            formControls={GDCFormElement}
                            setFormData={setFormData}
                            buttonText={currentEditedId!==null?'Update':'Add'}
                            onSubmit={onsubmit}
                            formData={formData} // Pass formData as an object
                          
                            />
                        </div>
                    </SheetContent>
                </Sheet>
        </div>


        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            
        </div>
    </Fragment>


       
    )
}

export default Gd
