import { Button } from '@/components/ui/button'
import { logoutUser } from '@/store/authSlice'
import React from 'react'
import { useDispatch } from 'react-redux'


function AdminLogout() {
    const dispatch =useDispatch()

function handlleLogout(){
dispatch(logoutUser())
}
    return (
        <>
        <Button className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950' onClick={handlleLogout}>
            Logout
        </Button>
        </>
    )
}

export default AdminLogout
