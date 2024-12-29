import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'

function QuotationCard({qoutationInfo,handleDelete,handleEdit}) {
    return (
        <Card>
            <CardContent className='grid gap-4 p-4'>
            <div className=" justify-center text-center">
                            <p className="font-semibold text-2xl">
                            QUOTATION
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p>To,</p>
                            <p>Date :    <span>{qoutationInfo.createdAt.slice(0,10)}</span>         </p>
                        </div>
                        <div className="flex justify-between">
                            <p>{qoutationInfo.userName}</p>
                        </div>
                        <div className="flex ">
                            <p className='font-semibold'>Subject : </p>{qoutationInfo.subject}
                        </div>
                       
                        <div className=''>
                             <p >  Dear {qoutationInfo.sirMam},<br/><br/></p>
                            <p>
                          <p className='text-muted-foreground'>
As per our discussion, we are pleased to submit our quotation for the discussed services for your kind consideration.
Thank you for your valuable inquiry. We are pleased to quote as below:</p>

                            </p>
                            <br/>
                           <p className='font-semibold'>CONTENT:<br/>
                            {qoutationInfo.content}</p> 
                        </div>

                        <div className="font-semibold">
                            <p>Total Cost Will be {qoutationInfo.cost}</p>
                        </div>

                        <div className=" justify-start text-muted-foreground">
<p className='mb-2'>Thank You !!</p>
<p className='mb-2'>COLOR MY LIFE</p>

<p className='mb-2'>OFFICE ADDRESS: <br/>207 Guruwar Peth, Kamal Niwas, Karad 415110</p><hr/>

                        </div>
            </CardContent>
            <CardFooter className=' justify-end'>
                <Button onClick={()=>handleDelete(qoutationInfo)} className='' variant='outline'>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}

export default QuotationCard
