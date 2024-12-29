import React from 'react'
import { Outlet } from 'react-router-dom'
import UserPageHeader from './header'
import UserFooter from './footer'

function UserPageLayout() {
    return (
       
              <div className="flex flex-col bg-white overflow-hidden">
              {/* common header */}
             <UserPageHeader/>
              <main className="flex flex-col w-full">
                <Outlet />
              </main>
              <UserFooter/>
            </div>
        
    )
}

export default UserPageLayout
