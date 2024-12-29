import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import adminProductSlice from './adminProductSlice'
import UserProductSlice from './userProductSlice'
import  AdminSmmSlice from './smmSlice'
import  AdminGdSlice from './gdSlice'
import AdminSmphSlice from './smphSlice'
import AdminDaSlice from './daSlice'
import UserCartSlice from './cartSlice.js'
import AddressSlice from './addresssSlice'
import StatusSlice from './statusSlice'
import OrderSlice from './orderSlice'
import AllAddressSlice from './allAddresssSlice'
import QuotationSlice from './quotationSlice'

const store=configureStore({
    reducer:{

        auth:authSlice,
        adminProduct:adminProductSlice,
        userProduct:UserProductSlice,
        adminSmmSlice: AdminSmmSlice,
        adminGdSlice: AdminGdSlice,
        adminSmphSlice: AdminSmphSlice,
        adminDaSlice: AdminDaSlice,
        userCartSlice: UserCartSlice,
        addressSlice:AddressSlice,
        statusSlice:StatusSlice,
        orderSlice:OrderSlice,
        allAddressSlice:AllAddressSlice,
        quotationSlice:QuotationSlice,
        
        


    }
})

export default store;