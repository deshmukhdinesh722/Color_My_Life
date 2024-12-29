import React from 'react'
import abc from '../../assets/abc.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Address from '@/components/user-page-view/address'
import UserOrders from '@/components/user-page-view/orders'
import QuotationUser from '@/components/user-page-view/orders'

function ShopAccount() {

    return (
     <div className="flex  flex-col  items-center">
        <div className="relative h-[425px]  overflow-hidden">
            <img src={abc} alt="" className='h-[350px] w-[350px] object-cover object-center ' />
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 py-8 ">
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <Tabs defaultValue='address'>
                    <TabsList>
                        <TabsTrigger value='address'>
                            Adddress
                            </TabsTrigger>
                            <TabsTrigger value='quotation'>
                            Quotation
                            </TabsTrigger>
                    </TabsList> 
                    <TabsContent value='address'>
                        <Address/>
                    </TabsContent>
                    <TabsContent value='quotation'>
                       <QuotationUser/>
                    </TabsContent>
                   
                </Tabs>
            </div>
        </div>
     </div>
        
    )
}

export default ShopAccount
