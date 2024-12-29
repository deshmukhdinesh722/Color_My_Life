import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './sidebar'
import AdminHeader from './header'
import AdminFooter from './footer'

function AdminLayout() {
    const [openSiderbar,setOpenSiderbar]=useState(false)
    return (
        <>
        <div className="flex min-h-screen w-full">
            {/* Admin side bar */}
            <AdminSidebar open={openSiderbar} setOpen={setOpenSiderbar}/>
            <div className="flex flex-1 flex-col">
                {/* header */}
                <AdminHeader open={openSiderbar} setOpen={setOpenSiderbar}/>
                <main className='flex-1 flex-col flex bg-muted/40 p-4 md:p-6'>
                    <Outlet/>
                </main>
                <AdminFooter />
            </div>
        </div>
        </>
    
    )
}

export default AdminLayout
