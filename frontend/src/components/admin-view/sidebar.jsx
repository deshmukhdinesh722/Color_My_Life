import { BrickWallIcon, ChartNoAxesCombined, LayoutDashboard, ListOrderedIcon, LogOut, LucideShoppingBag, Package2Icon, PackageCheck } from 'lucide-react'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

const AdminSidebarMenuItems=[
    {
        id:'dashboard',
        label:'Dashboard',
        path:'/admin/dashboard',
        icons:<LayoutDashboard/>
    },
    {
        id:'products',
        label:'Products',
        path:'/admin/products',
        icons:<LucideShoppingBag/>
    },
    {
        id:'order',
        label:'Orders',
        path:'/admin/order',
        icons:<ListOrderedIcon/>
    },
    {
        id:'package',
        label:'Package',
        path:'/admin/MainPackage',
        icons:<PackageCheck/>
    },
    {
        id:'quatation',
        label:'Quatation',
        path:'/admin/quatation',
        icons:<BrickWallIcon/>
    },
    {
        id:'logout',
        label:'Logout',
        path:'/admin/logout',
        icons:<LogOut/>
    }
]

function MenuItems(){
    const navigate=useNavigate()
    return <nav className='mt-8 flex-col flex gap-2 cursor-pointer  ' >
{
    AdminSidebarMenuItems.map(menu=><div key={menu.id} onClick={()=>navigate(menu.path)} className='flex items-center gap-2 rounded-md px-3 py-2  hover:bg-muted hover:text-foreground'>
        {
            menu.icons
        }
        <span>{menu.label}</span>
    </div>)
}
    </nav>
}
function AdminSidebar({open, setOpen}) {
    
    const navigate=useNavigate()
    return (
       <Fragment>
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side='right' className='w-64'>
            <div className="flex flex-col h-full ">
                <SheetHeader className="border-b">
                    <SheetTitle>
                        COLOR MY LIFE
                    </SheetTitle>
                </SheetHeader>
                <MenuItems/>
            </div>
        </SheetContent>
    </Sheet>
        <aside className='hidden w-64 flex-col border-r bg-background p-5 lg:flex lg:text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
            <div onClick={()=>navigate("/admin/dashboard")} className='flex cursor-pointertext-center items-center gap-2 '>
              
            </div>
            <div onClick={()=>navigate("/admin/dashboard")} className='flex cursor-pointer items-center gap-2  '>
                <ChartNoAxesCombined size={40}/>
                <h1 className='text-xl  font-semibold'>Admin</h1>
            </div>
            <MenuItems/>
        </aside>

       </Fragment>
    )
}

export default AdminSidebar