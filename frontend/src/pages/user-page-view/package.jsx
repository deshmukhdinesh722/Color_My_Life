



import CommanForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {  SMMFormElement } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewSmm, deleteSmm, fetchSmm } from '@/store/smmSlice';
import { BugPlay, IndentIncrease, ThumbsUp } from 'lucide-react';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Gd from './gd';
import Smph from './smph';
import Da from './da';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@radix-ui/react-context-menu';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';


const initialFormdataOne={
    dailyCharges:'',
    monthlyCharges:'',
    maxReach:'',
    
}

function UserPackage() {
    const [openCreateDialog,setOpenCreateDialog]=useState(false);
    const [formData,setFormData]=useState(initialFormdataOne)

    const {productList}=useSelector(state =>state.adminSmmSlice)

    const [currentEditedId,setCurrentEditedId]=useState(null)

    const [getCurrentProductId,setcurr]=useState()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchSmm())
        console.log(productList);
        
    },[dispatch])


    const {toast}=useToast()
    function onsubmit(e) {
        e.preventDefault();
        console.log(formData);
    
        dispatch(addNewSmm(formData)).then((data) => {
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchSmm())
                console.log(data?.payload?.data);
                
                setOpenCreateDialog(false);
                setFormData(initialFormdataOne);
                toast({
                    title: "Package Added Successfully",
                });
            } else {
                toast({
                    title: "Failed to add product",
                    variant: "destructive",
                });
            }
        });
    }
    
    function fav(getCurrentProductId){
        console.log(getCurrentProductId);
        dispatch(addFavSmm(getCurrentProductId))
        .then((data)=>{
            if(data?.payload?.success){
                dispatch(fetchSmm())
             
              
            } 
            toast({
                title:'Package Added to Favourite '
            })
        })
        
     }

    return (
       
        <Fragment className='bg-gradient-to-r from-blue-50 to-indigo-100'>
       
        
      
        
        <div className="h-[250px] bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact for More Information</h2>
        <p className="text-gray-600 mb-6">We are here to assist you. Reach out to us via WhatsApp!</p>

        <div className="flex items-center justify-center space-x-4">
          <div className="bg-green-50 p-3 rounded-full shadow-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Logo"
              className="w-8 h-8"
            />
          </div>
          <Link
            href="https://wa.me/7387931531"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold text-lg hover:underline"
          >
           7387931531
          </Link>
        </div>
      </div>
    </div>
               
  
     
        <Tabs defaultValue="SM" className="w-[350px] lg:w-full bg-gradient-to-r from-blue-50 to-indigo-100">
      <TabsList className="grid w-full lg:grid-cols-4 grid-cols-1 gap-3  lg:mb-3 mb-32">
        <TabsTrigger value="SM" className='text-white bg-gradient-to-r from-cyan-600 to-cyan-900'>SOCIAL MEDIA</TabsTrigger>
        <TabsTrigger value="GD" className='text-white bg-gradient-to-r from-cyan-600 to-cyan-900'>GRAPHICS DESIGNING</TabsTrigger>
        <TabsTrigger value="SMPH" className='text-white bg-gradient-to-r from-cyan-600 to-cyan-900'>SOCIAL MEDIA POST DESIGNING </TabsTrigger>
        <TabsTrigger value="DA" className='text-white bg-gradient-to-r from-cyan-600 to-cyan-900'>DIGITAL ARTS</TabsTrigger>

      </TabsList>
      <TabsContent value="SM" >
        <Card>
          <CardHeader>
            <CardTitle className='text-center'>SOCIAL MEDIA MARKETING CHARGES (MONTHLY) </CardTitle>
            <CardDescription>
         
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
        
          <Table className=' text-cyan-950'>
        <TableHeader >
        <TableRow>
             <TableCell></TableCell>
            </TableRow>
            <TableRow >
                  <TableHead className='text-center'>
                    Daliy Charges
                  </TableHead>
             
                  <TableHead className='text-center'>
                    Monthly Charges
                  </TableHead>
                  
                  <TableHead className='text-center'>
                    Max Reach
                  </TableHead>
            </TableRow>
         
        </TableHeader>
        <TableBody>
        {productList && productList.length >0 ? 
                    productList.map(productItem=> 
                      
         
                        <TableRow className='text-center'>
                                  <TableCell >
                               { productItem.dailyCharges}/-
                                  </TableCell>
                                  <TableCell>
                              {  productItem.monthlyCharges}/-
                                  </TableCell> 
                                  <TableCell>
                                {productItem.maxReach} 
                                  </TableCell>
                                  <TableCell>
                                    <div className='lg:flex  gap-2'>  
                           
                            </div>
                               
                                  </TableCell>
                              </TableRow>
             
                    )
                    :<h1>Not Found data</h1>
        
                   
                   }
             
             </TableBody>
          
      </Table>


          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="GD">
        <Card>
          <CardHeader>
            <CardTitle className='text-cyan-950 text-center'>GRAPHICS DESIGNING CHARGES</CardTitle>
            <CardDescription>
            
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
        <Gd/>
          </CardContent>
         
        </Card>
      </TabsContent>
      <TabsContent value="SMPH">
        <Card>
          <CardHeader>
            <CardTitle className='text-cyan-950 text-center'>SOCIAL MEDIA PAGE DESIGNING</CardTitle>
            <CardDescription>
            
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Smph/>
          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="DA">
        <Card>
          <CardHeader>
            <CardTitle className='text-cyan-950 text-center'>CML DIGITAL ARTS STUDIO SERVICES</CardTitle>
            <CardDescription>
            
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Da/>
          </CardContent>
   
        </Card>
      </TabsContent>
    </Tabs>
    </Fragment>
    )
}

export default  UserPackage
