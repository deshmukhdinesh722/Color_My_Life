import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'

function AddressCard({addressInfo , handleDelete, handleEdit,setCurrentselectedAddress}) {
    return (
        <Card onClick={setCurrentselectedAddress?()=> setCurrentselectedAddress(addressInfo):null}>
            <CardContent className='grid gap-4 p-4'>
                <Label> Address: {addressInfo?.address}</Label>
                <Label>Phone No: {addressInfo?.phone}</Label>
                <Label>Additional Info: {addressInfo?.notes}</Label>

            </CardContent>
            <CardFooter className='flex justify-between'>
                <Button onClick={()=>handleEdit(addressInfo)} className=' ' variant='outline'>
                    Edit
                </Button>
                <Button onClick={()=>handleDelete(addressInfo)} className='' variant='outline'>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AddressCard
