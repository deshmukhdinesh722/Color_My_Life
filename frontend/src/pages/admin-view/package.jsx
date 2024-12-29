
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
import {  SMMFormElement } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewSmm, deleteSmm, fetchSmm } from '@/store/smmSlice';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const initialFormdataOne={
    dailyCharges:'',
    monthlyCharges:'',
    maxReach:'',
    
}

function AdminPackage() {
    const [openCreateDialog,setOpenCreateDialog]=useState(false);
    const [formData,setFormData]=useState(initialFormdataOne)

    const {productList}=useSelector(state =>state.adminSmmSlice)

    const [currentEditedId,setCurrentEditedId]=useState(null)

    const [getCurrentProductId,setcurr]=useState()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchSmm())
        console.log(productList);
        
    },[dispatch])


    const {toast}=useToast()
    function onsubmit(e) {
        e.preventDefault();
        console.log(formData);
    
        dispatch(addNewSmm(formData)).then((data) => {
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchSmm())
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
        dispatch(deleteSmm(getCurrentProductId))
        .then((data)=>{
            if(data?.payload?.success){
                dispatch(fetchSmm())
             
              
            } 
            toast({
                title:'Package deleted please refresh'
            })
        })
        
     }

    return (
       
        <Fragment>
        <div className="mb-5 gap-5 w-full  justify-end">
        <h3 className='text-cyan-950 text-2xl'>SOCIAL MEDIA MARKETING CHARGES (MONTHLY) 
        </h3>
      
        <Table>
        <TableHeader>
        <TableRow>
                <TableCell>
                    
                </TableCell>
            </TableRow>
        <TableRow>
              <Button onClick={()=>setOpenCreateDialog(true) } className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
                Add New 
            </Button>
           
            </TableRow>
            <TableRow>
                <TableCell>

                </TableCell>
            </TableRow>
            <TableRow >
                  <TableHead >
                    Daliy Charges
                  </TableHead>
             
                  <TableHead>
                    Monthly Charges
                  </TableHead>
                  
                  <TableHead>
                    Max Reach
                  </TableHead>
            </TableRow>
         
        </TableHeader>
        <TableBody>
        {productList && productList.length >0 ? 
                    productList.map(productItem=> 
                      
         
                        <TableRow>
                                  <TableCell >
                               { productItem.dailyCharges}/-
                                  </TableCell>
                                  <TableCell>
                              {  productItem.monthlyCharges}/-
                                  </TableCell> 
                                  <TableCell>
                                {productItem.maxReach} 
                                  </TableCell>
                                  <TableCell>
                                    <div className='lg:flex  gap-2'>  
                            <Button onClick={()=> handleDelete(productItem?._id)} variant='outline' >
                               x
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
                            formControls={SMMFormElement}
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

export default AdminPackage
