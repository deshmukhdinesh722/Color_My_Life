
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
import UserQuotationCard from './userquotationCard'

const initialFormData={
       userName:'',
       userId:'',
       subject:'',
       sirMam:'',
       content:'',
       cost:''
    }
function QuotationUse({setCurrentselectedAddress}) {
    
            const [formData,setFormData]=useState(initialFormData)
            const {quotationList}=useSelector(state => state.quotationSlice)
            const [currentEditedId,setCurrentEditedId]=useState(null)
            const {user}=useSelector(state => state.auth)
            
        
            const dispatch = useDispatch()
            const {toast}= useToast()
        
            useEffect(()=>{
                dispatch(fetchQuotation({userId:user?.id}))
           console.log(quotationList);
        },[dispatch])
        
       
 
            return (
               <Card  >
                 
                    <div className='mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2'>
                      {quotationList && quotationList.length >0 ?
                        quotationList.map(item=> 
                        <UserQuotationCard qoutationInfo={item}
                        />)
                        :<>Not any Quotation</>}
                    </div>
                   
                </Card> 
            )
        }
    
export default QuotationUse
