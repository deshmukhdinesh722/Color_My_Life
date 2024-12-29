
import React, { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, deleteUserFromCart, fetchAllCartsAdmin, fetchAllUsersAdmin, fetchCart, orderDetailsAdmin } from '@/store/cartSlice'
import { Label } from '@/components/ui/label'
import { Separator } from '@radix-ui/react-select'
import CommanForm from '@/components/common/form'
import { addStatus, deleteStatus, editStatus, fetchStatus } from '@/store/statusSlice'
import { allUserAddress } from '@/store/allAddresssSlice'
import { Cross, X, XCircle, XIcon } from 'lucide-react'


function AdminOrders() {
  
       const[st,setSt]=useState('Pending')
    const [openDetailsDialog,setOpenDetailsDialog]=useState(false)
    const dispatch=useDispatch()
    const{cartItems,orderList}=useSelector(state=> state.userCartSlice)
    const{status}=useSelector(state=> state.statusSlice)
   const{address}=useSelector(state=> state.allAddressSlice)
  const [statusId,setStstusId]=useState(status?._id)

    useEffect(()=>{
        dispatch(fetchAllCartsAdmin())
        dispatch(fetchAllUsersAdmin())
    },[]) 
console.log(cartItems);

    function handleDialog({id,userName}){ 
        // fetch orderDetaiks
        dispatch(orderDetailsAdmin({userId:id,userName:userName}))
     // fetch Address   
      dispatch(allUserAddress({userId:id})).then((data)=>{
        console.log(data);
        
    })
  
        // fetch status
        dispatch(fetchStatus({userId:id})).then((data)=>{
            console.log(data);
            
        })
         setOpenDetailsDialog(true)  
                 
                    
                
            
        
    }
    function handleStatus({id,status}){
          dispatch(addStatus({
            userId:id,
            status:status
            
          })).then((data)=>{
            fetchStatus({userId:id})
            
            dispatch(fetchAllCartsAdmin())
            
          })

        //   dispatch(editStatus({
        //     userId:id,status:status
        //   })).then((data)=>{
        //     console.log(data)
        //   })

           
        }

function handleDelete({userId, userName,productId}){
dispatch(deleteCart({userId,productId,userName})).then(()=>{
    console.log("Done");
    dispatch(fetchAllCartsAdmin())
    dispatch(fetchCart({userId,userName}))
    dispatch(orderDetailsAdmin({userId:id,userName:userName}))
    dispatch(allUserAddress({userId:id}))
    dispatch(allUserAddress({userId:id}))
})


}
function  handleItemDelete({userId}){
  dispatch(deleteUserFromCart({id:userId})).then(()=>{
    dispatch(fetchAllCartsAdmin())
    
  })




}

function handleDeleteStatus({id}){
      dispatch(deleteStatus({id:id})).then((data)=>{
    console.log(data);
    
  })
}

    return (
        <Card>
                   <CardHeader>
                       <CardTitle>
                           All Orders
                       </CardTitle>
                   </CardHeader>
                   <CardContent>
                                   <Table>
                                       <TableHeader>
                                           <TableRow>
                                               <TableHead>
                                                   User
                                               </TableHead>
                                               <TableHead>
                                                  Date
                                               </TableHead>
                                               
                                               
                                           </TableRow>
                                       </TableHeader>
                                       <TableBody>
                                           {
                                            cartItems && cartItems.length >0 ?
                                            cartItems.map((item) =>
                                            <TableRow  >
                                               
                                               
                                               <TableCell>{item?.userName}</TableCell>
                                                  <TableCell> {item?.createdAt.slice(0,10)} </TableCell>
                                                 
                                                  <TableCell>
                                               
                                                  </TableCell>
                                                
                                                  <TableCell >
                                                <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
                                                         <div className='flex gap-3' > 
                                                             <Button onClick={()=> handleDialog({id:item.userId,userName:item.userName})}
                                                            className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
                                                    View   </Button>
                                                    <Button onClick={()=> handleItemDelete({userId:item._id})}
                                                            className='text-white bg-gradient-to-r from-red-600 to-red-800'>
                                                    <XIcon/>  </Button>
                                                    </div> 
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Order Details</DialogTitle></DialogHeader>
<Table className='text-center text-cyan-950'>
      {
    
     orderList?
     orderList.map(i=>
     <p>
<h1 className='flex gap-6 text-xl justify-between text-center text-cyan-950'><p>{i.userName}</p> <p>ID:{i.userId}</p></h1>


    <TableHeader >
        <TableHead className='text-center'>ProductId</TableHead>
        <TableHead className='text-center'>Quantity</TableHead>
        <TableHead className='text-center'>Date</TableHead>

    </TableHeader>
    {i.items.map(j=>
    <TableRow className='text-center'>
        <TableCell>{j.productId.slice(6-9)}</TableCell>
        <TableCell>{j.quantity}</TableCell>
        <TableCell>{i.createdAt.slice(0,10)}</TableCell>
        <TableCell>
        <Button onClick={()=> handleDelete({userId:i.userId, userName:i.userName,productId:j.productId})}
                                                            className='text-white bg-gradient-to-r from-red-600 to-red-800'>
                                                    <X/> </Button>
        </TableCell>

    </TableRow>
)}

<TableRow>
<div className='flex gap-6 justify-center '>
<Button  onClick={()=> handleStatus({id:i.userId,status:'Accepted'})} className='bg-gradient-to-r from-cyan-600 to-cyan-950'>
   Accepted
</Button><Button  onClick={()=> handleStatus({id:i.userId,status:'Rejected'})} className='bg-gradient-to-r from-cyan-600 to-cyan-950'>
    Rejected
</Button>

</div>
</TableRow>

</p>
     )
    :null
 } 
</Table>

<div> 
{
status?

status.map(sItem=>  
  
    sItem.items.map(iItem=>
       
        <div className='flex justify-between'>
            <h1>Status :</h1>
        
            <p>
             {iItem.status}   
          
            </p>   
          
        </div>
      
        
    ) 
) 

:st

}

</div>

<div>
{ 
    address?

    address.map(aItem=>
  
        <div >
        <div className='flex justify-between'> <p>Address :</p>
       <p >{aItem.address}</p> </div>
       <div className='flex justify-between'><p>Phone :</p>
       <p >{aItem.phone}</p> </div>
         <div className='flex justify-between'> <p>Extra Discription :</p>
       <p >{aItem.notes}</p> </div>
       
    </div> 
    
    )
 
   
    :<>dg</>


}</div>
  </DialogContent>
 </Dialog>
 </TableCell>
</TableRow> 
                      
):null}
</TableBody>
</Table>  

 <Table className='hidden'>
                                       <TableHeader>
                                           <TableRow>
                                               <TableHead>
                                               Order Id
                                               </TableHead>
                                               <TableHead>
                                               Order Date
                                               </TableHead>
                                               <TableHead>
                                               Order Status
                                               </TableHead>
                                               <TableHead>
                                               Order Price
                                               </TableHead>
                                           </TableRow>
                                       </TableHeader>
                                       <TableBody>
                                           {
                                            cartItems && cartItems.length >0 ?
                                            cartItems.map((item, key) =>
                                            <TableRow key={0}>
                                               
                                               
                                               <TableCell> 1 </TableCell>
                                                  <TableCell> 1</TableCell>
                                                  <TableCell> 1 </TableCell>

                                               <TableCell>1</TableCell>
                                                  <TableCell>
                                                <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
                                                           <Button onClick={()=>setOpenDetailsDialog(true)}
                                                            className='bg-orange-700'>
                                                    View
                                                                                                       </Button>
                                                   {/* <AdminOrderDetails cartItems={cartItems}/> */}

                                                </Dialog>
                                               </TableCell>
                                        
                                                </TableRow>
                                                )
                                            :null
                                           }
                                       </TableBody>
  </Table>
</CardContent>
 </Card>
        
    )
}

export default AdminOrders
