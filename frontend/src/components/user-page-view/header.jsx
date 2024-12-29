import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { AlignJustify, BusIcon, HousePlug, LogOut, Menu, ShoppingBag, ShoppingBasket, ShoppingCart, UserCheck, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useDispatch, useSelector } from 'react-redux';
import { userViewHeader } from '@/config';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback } from '../ui/avatar';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../ui/dropdown-menu';
import { logoutUser } from '@/store/authSlice';
import CartWrapper from './cartWrapper';
import { fetchCart } from '@/store/cartSlice';
import abc from '../../assets/abc.png'

function MenuItems() {
    return (
        <nav className='flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row'>
            {userViewHeader.map((menuItem) => (
                <Link
                    className='text-sm font-medium'
                    key={menuItem.id}
                    to={menuItem.to}
                >
                    {menuItem.label}
                </Link>
            ))}
        </nav>
    );
}

function HeaderRightContent(){

  

    const { user } = useSelector((state) => state.auth);
    const [oprnCartSheet,setOprnCartSheet]=useState(false);
    const {cartItems}= useSelector((state)=> state.userCartSlice)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    function handlleLogout(){
        dispatch(logoutUser())
    }
    useEffect(()=>{
        console.log(user?.id);
        
        dispatch(fetchCart({userId:user?.id,userName:user?.userName}))
        console.log(cartItems);
        
    },[dispatch])

    return <div className='flex lg:items-center lg:flex-row flex-col gap-4 '>
        <Sheet open={oprnCartSheet} onOpenChange={()=>setOprnCartSheet(false)}>
             <Button onClick={()=>setOprnCartSheet(true)} variant='outline' size='icon'  >
            <ShoppingCart className='h-6 w-6 '/>
            <span className='sr-only'>
             User Cart
            </span>
            </Button>
            <CartWrapper setOprnCartSheet={setOprnCartSheet} cartItems={cartItems && cartItems.items && cartItems.items.length >0  ? cartItems.items :[1]}/>
        </Sheet>
     
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar >
                <AvatarFallback className='bg-gradient-to-r from-cyan-600 to-cyan-950 h-8 w-8  cursor-pointer text-white '>
                   {user?.email[0].toUpperCase()}
                </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent  side='right' className='w-56'>
            <DropdownMenuLabel>
                Logged in as {user?.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={()=> navigate('/user-page/account')}>
                <UserCircle className='mr-2 h-4 w-4'/> Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={handlleLogout}>
                <LogOut className='mr-2 h-4 w-4'/> Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        

    </div>
}

function UserPageHeader() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const logo=[abc]
    
    return (
        <header className='sticky top-0 z-40 w-full border-b bg-background'>
            <div className='flex h-16 items-center justify-between px-4 md:px-6'> 
                <Link to='/user-page/home' className='flex  '> 
            <div className="flex gap-12">
                <div>
                {
                        logo.map((logo,index)=>
                            <img 
                            src={logo}
                            key={index}
                            className='absolute  top-4 lg:top-1 left-2 lg:w-14   lg:h-14 w-10 h-10 object-cover transition-opacity duration-1000'
                            />)
                     }
                </div>
               
                
                    {/* <BusIcon /> */}
                    <span className='font-boldtext-white font-semibold text-gradient-to-r from-cyan-500 to-cyan-700 text-3xl lg:text-4xl'>
                  
                        COLOR MY LIFE
                    </span>
                    </div>
                </Link>

                {/* Sheet for Mobile View */}
                <Sheet>
                    {/* Trigger for Opening Sheet */}
                    <SheetTrigger asChild>
                        <Button variant='outline' size='icon' className='lg:hidden'>
                            <Menu className='h-6 w-6' />
                            <span className='sr-only'>Toggle header menu</span>
                        </Button>
                    </SheetTrigger>

                    {/* Sheet Content */}
                    <SheetContent side='right' className='w-full max-w-xs text-center items-center justify-center'>
                    <span className=' text-cyan-950 font-semibold text-3xl'>
                        COLOR MY LIFE<br/>
                    </span><br/><br/>
                      <center>  <MenuItems />
                        <HeaderRightContent/></center>
                    </SheetContent>
                </Sheet>

                {/* Menu Items for Desktop View */}
                <div className='hidden lg:block'>
                    <MenuItems /> 
                   
                </div>
                <div className='hidden lg:block'>
                     <HeaderRightContent /> 
                </div>
               

            </div>
        </header>
    );
}

export default UserPageHeader;
