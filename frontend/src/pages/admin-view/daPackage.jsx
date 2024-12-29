
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
import { DAFormElement } from '@/config';
import { useToast } from '@/hooks/use-toast';

import { addNewDa, deleteDa, fetchDa } from '@/store/daSlice';

import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';



const initialFormdataOne={
    designingCharges:'',
    price:''
    
}

function DaPackage() {
    const [openCreateDialog,setOpenCreateDialog]=useState(false);
    const [formData,setFormData]=useState(initialFormdataOne)

    const {productList}=useSelector(state =>state.adminDaSlice)

    const [currentEditedId,setCurrentEditedId]=useState(null)

    const [getCurrentProductId,setcurr]=useState()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchDa())
        console.log(productList);
        
    },[dispatch])


    const {toast}=useToast()
    function onsubmit(e) {
        e.preventDefault();
        console.log(formData);
    
        dispatch(addNewDa(formData)).then((data) => {
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchDa())
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
        dispatch(deleteDa(getCurrentProductId))
        .then((data)=>{
            if(data?.payload?.success){
                dispatch(fetchDa())
             
              
            } 
            toast({
                title:'Package deleted please refresh'
            })
        })
        
     }
    return (

        <Fragment>
        <div className="mb-5 gap-5 w-full  justify-end">
        <h3 className='text-cyan-950 text-2xl'> CML DIGITAL ARTS STUDIO SERVICES 
        </h3>
      
        <Table>
        <TableHeader >
        <TableRow>
              <TableCell  >
              <Button onClick={()=>setOpenCreateDialog(true) } className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
                Add New 
            </Button>
              </TableCell>
            </TableRow>
            <TableRow >
                  <TableHead >
                    Designing 
                  </TableHead>
             
                  <TableHead>
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
                              {  productItem.price}
                                  </TableCell> 
                                 
                                  <TableCell>
                                    <div className='lg:flex  gap-2'>  
                            <Button onClick={()=> handleDelete(productItem?._id)} variant='outline' >
                               X
                            </Button>
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
                            formControls={DAFormElement}
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

export default DaPackage
