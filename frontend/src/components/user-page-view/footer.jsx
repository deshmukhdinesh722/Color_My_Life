import React from 'react'
import { Button } from '../ui/button'
import { AlignCenterIcon, AlignEndHorizontal, AlignEndVertical, AlignJustify, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

function UserFooter() {
    return (
       <footer className='lg:flex items-center h-[100px] justify-between px-4 py-3  text-white bg-gradient-to-r from-cyan-600 to-cyan-950 border-b'>

        

<p className='text-center'>COLOR MY LIFE</p>
<p className='justify-center text-center'>© 2024, Color My Life. All rights reserved</p>


 <p className='justify-end text-center'>
    <Link
    to="https://portfolio7602.vercel.app/"
    >
     DESIGNED BY DWebs
     </Link>
     </p>
       </footer>
        
    )
}

export default UserFooter
