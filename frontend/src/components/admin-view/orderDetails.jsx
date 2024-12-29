import React, { useState } from 'react'
import { DialogContent } from '../ui/dialog'
import { Label } from '../ui/label'
import { Separator } from '@radix-ui/react-select'
import CommanForm from '../common/form'
import { addStatus } from '@/store/statusSlice'
import { useDispatch } from 'react-redux'



function AdminOrderDetails({orderList,cartItems,id}) {
    // const{cartItems} =useSelector(state=> state.userCartSlice)
 
console.log(orderList);

   

    return (
                   
 <DialogContent  className='sm:max-w-[600px]'>
<div className="grid gap-6">

            <div className="grid gap-2">
    <div className="flex mt-6 items-center justify-between">
        {orderList >-1?
            
            <p>gdg</p>:<>gfg</>
            
            } 
        
    </div>
    
</div>

<Separator/>
<div className="grid gap-4 ">
<div className="grid gap-2">
    <div className="font-medium">
        Order Details
    </div>
    <ul className='grid gap-3 '>
        <li className='flex items-center justify-between'>
            <span>XYZ </span>
            <span>₹ 5</span>
        </li>
    </ul>
    <ul className='grid gap-3 '>
        <li className='flex items-center justify-between'>
            <span>Addresss</span>
            <span>₹ 5</span>
        </li>
        <li className='flex items-center justify-between'>
            <span>Additional: </span>
            <span>₹ 5</span>
        </li>
    </ul>
    <ul className='grid gap-3 '>
        <li className='flex items-center justify-between'>
            <span>Name:</span>
            <span>dd@dd.com</span>
        </li>
    </ul>
    <ul className='grid gap-3 '>
        <li className='flex items-center justify-between'>
            <span>Phone:</span>
            <span>dd@dd.com</span>
        </li>
    </ul>
</div>
</div>
<div>
<CommanForm
formControls={   [{
    label:'Status',
    name:'status',
    componentType:'select',
    options:[
        {id:"pending" , label:"Pending"},
        {id:"inProcess" , label:"In Process"},
        {id:"shipping" , label:"Shipping"},
        {id:"rejected" , label:"Rejected"},
        {id:"delivered" , label:"Delivered"},



    ],
}]}
formData={'o'}
setFormData={'o'}
buttonText={'status'}
            />
</div>
</div>
</DialogContent>         

    )
}

export default AdminOrderDetails
