import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({isAuthenticated, user, children}) {
    
    const location =useLocation() // specifies the currentr path
    if(!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))){ 

        // yamule jr authenticted nasel tr login page vr redirect honar

        return <Navigate to='/auth/login'/>
    }
    if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))){
        

    // jr user ha authenticated asel tr.. user asel tr user-page laa ani admin asel tr admin dashborad laa redirect honar
        
    if(user?.role==='admin'){
        return <Navigate to='/admin/dashboard'/>
    }
    else{
        return <Navigate to='/user-page/home'/>
    }
    }

    // user admin page access karu icchit asel tr nahi honar access =>

    if(isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin'))
    {
        return <Navigate to ='/unauth'/>
    }

    // admin user page user-page bghayche asel tr=>

        if(isAuthenticated && user?.role==='admin' && location.pathname.includes('user-page')){
            return <Navigate to='/admin/dashboard'/>
        }

    return (
        <>
          {children}
        </>
    )
}

export default CheckAuth