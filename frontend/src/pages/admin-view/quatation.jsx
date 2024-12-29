 import React, { useEffect, useState } from 'react'
import { AddressFormElements, QuatationFormElements } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, deleteAddress, editAddress, fetchAddress } from '@/store/addresssSlice'
import AddressCard from '@/pages/user-page-view/addressCard'
import { deleteCart } from '@/store/cartSlice'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import CommanForm from '@/components/common/form'
import { addQuotation, deleteQuotation, fetchAllQuotationAdmin, fetchQuotation } from '@/store/quotationSlice'
import QuotationCard from './quotationCard'

const initialFormData={
       userName:'',
       userId:'',
       subject:'',
       sirMam:'',
       content:'',
       cost:''
    }
function AdminQuatation({setCurrentselectedAddress}) {
    
            const [formData,setFormData]=useState(initialFormData)
            const {quotationList}=useSelector(state => state.quotationSlice)
            const [currentEditedId,setCurrentEditedId]=useState(null)
        
            const dispatch = useDispatch()
            const {toast}= useToast()
        
            function hangelManageQuatation(){
           
                dispatch(addQuotation({...formData}))
                .then((data)=>{
                    console.log(data);
                    if(data.payload.success){
                         dispatch(fetchAllQuotationAdmin())
                         setFormData(initialFormData)
                        
                    }

                    
                })
        
            }
            useEffect(()=>{
                dispatch(fetchAllQuotationAdmin())
           console.log(quotationList);
           
            
        },[dispatch])
        
        function handleDelete(getCurrentQuotation){
        dispatch(deleteQuotation({quotationId:getCurrentQuotation._id}))
        .then((data)=>{
            console.log(data);
            
            if(data?.payload?.success){
                dispatch(fetchAllQuotationAdmin())
            }
        })
        
        }
 
            return (
                <Card>
                  
                    <CardHeader className='font-semibold text-3xl'>
                        {
                            currentEditedId!== null?
                            'Edit Quotation'
                            :
                            'Create New Quotation'
                        }
                    </CardHeader>
                    <CardContent className='space-y-3'>
                        <div className=" justify-center text-center">
                            <p className="font-semibold text-2xl">
                            QUOTATION
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p>To,</p>
                            <p>Date :    <span>XXXX-YY-ZZ</span>         </p>
                        </div>
                        <div className="flex justify-between">
                            <p>XYZ</p>
                        </div>
                        <div className="flex ">
                            <p className='font-semibold'>Subject : </p>XYZ
                        </div>
                        <div className="text-muted-foreground">
                            <p>
                            Dear XYZ,<br/><br/></p>
                            <p>
As per our discussion, we are pleased to submit our quotation for the discussed services for your kind consideration.
Thank you for your valuable inquiry. We are pleased to quote as below:

                            </p>
                            <br/>
                            CONTENT
                        </div>

                        <div className="font-semibold">
                            <p>Total Cost Will be XYZ</p>
                        </div>

                        <div className=" justify-start">
<p className='mb-2'>Thank You !!</p>
<p className='mb-2'>COLOR MY LIFE</p>

<p className='mb-2'>OFFICE ADDRESS: 207 Guruwar Peth, Kamal Niwas, Karad 415110</p><hr/>

                        </div>
                        <CommanForm
                        formControls={QuatationFormElements}
                        formData={formData}
                        setFormData={setFormData}
                        buttonText={currentEditedId !==null?'Update':'Add'}
                        onSubmit={hangelManageQuatation}
                        />
                    </CardContent>
                    <div className='mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                      {quotationList && quotationList.length >0 ?
                        quotationList.map(item=> 
                        <QuotationCard qoutationInfo={item} handleDelete={handleDelete}
                        />)
                        :<>gg</>}
                    </div>
                </Card>
            )
        }
    
export default AdminQuatation
