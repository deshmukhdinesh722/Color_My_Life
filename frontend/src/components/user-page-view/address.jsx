import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import CommanForm from '../common/form'
import { AddressFormElements } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, deleteAddress, editAddress, fetchAddress } from '@/store/addresssSlice'
import AddressCard from '@/pages/user-page-view/addressCard'
import { deleteCart } from '@/store/cartSlice'
import { useToast } from '@/hooks/use-toast'

const initialFormData={
        address:'',
        phone:'',
        notes:''
    }
function Address({setCurrentselectedAddress}) {
    
    const [formData,setFormData]=useState(initialFormData)
    const {user}=useSelector(state => state.auth)
    const {addressList}=useSelector(state => state.addressSlice)
    const [currentEditedId,setCurrentEditedId]=useState(null)

    const dispatch = useDispatch()
    const {toast}= useToast()

    function hangelManageaddress(e){
        e.preventDefault();

        if(addressList.length >= 1 && currentEditedId === null){
            setFormData(initialFormData)
            toast({
                title:'Maximum 1 Address only',
                variant:'destructive'
            })
            return;
        }
        currentEditedId !== null ? 
        
        dispatch(editAddress({
            userId:user?.id, addressId:currentEditedId, formData:formData
        })).then((data)=>{
            if(data?.payload?.success){
                dispatch(fetchAddress(user?.id))
                setCurrentEditedId(null)
                setFormData(initialFormData)
            }
        })
        
        :
        dispatch(addAddress({...formData, userId:user?.id}))
        .then((data)=>{
            console.log(data);
            if(data.payload.success){
                dispatch(fetchAddress(user.id))
                setFormData(initialFormData)
                console.log(addressList);
                
            }
            
        })

    }
    useEffect(()=>{
    dispatch(fetchAddress(user.id))
    console.log(addressList);
    
},[dispatch])

function handleDelete(getCurrentAddress){
dispatch(deleteAddress({userId:user?.id, addressId: getCurrentAddress._id}))
.then((data)=>{
    console.log(data);
    
    if(data?.payload?.success){
        dispatch(fetchAddress(user?.id))
    }
})

}

function handleEdit(getCurrentAddress){
    setCurrentEditedId(getCurrentAddress?._id)
    setFormData({...formData,
        address:getCurrentAddress?.address,
        phone:getCurrentAddress?.phone,
        notes:getCurrentAddress?.notes
    } )

}
    return (
        <Card>
            <div className='mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {addressList && addressList.length >0 ?
                addressList.map(item=> 
                <AddressCard setCurrentselectedAddress={setCurrentselectedAddress} addressInfo={item} handleDelete={handleDelete} handleEdit={handleEdit}
                />)
                :null}
            </div>
            <CardHeader className='font-extrabold'>
                {
                    currentEditedId!== null?
                    'Edit Address'
                    :
                    'Add New Address'
                }
            </CardHeader>
            <CardContent className='space-y-3'>
                <CommanForm
                formControls={AddressFormElements}
                formData={formData}
                setFormData={setFormData}
                buttonText={currentEditedId !==null?'Update':'Add'}
                onSubmit={hangelManageaddress}
                />
            </CardContent>
        </Card>
    )
}

export default Address
