import React from 'react'
import { Button } from '../ui/button'
import { AlignCenterIcon, AlignEndHorizontal, AlignEndVertical, AlignJustify, LogOut } from 'lucide-react'

function AdminHeader({setOpen}) {
    return (
       <header className='flex items-center  justify-between px-4 py-3 bg-background border-b'>

        <div className='flex flex-1  '>
        <h1 className='text-3xl text-left font-extrabold '>COLOR MY LIFE</h1>

        </div>

        <Button onClick={()=>setOpen(true)} className='lg:hidden sm:block bg-white text-black'>
            <AlignJustify/>
            <span className=' sr-only' > 
                Toggle Menu 
            </span>
        </Button>
       </header>
        
    )
}

export default AdminHeader
