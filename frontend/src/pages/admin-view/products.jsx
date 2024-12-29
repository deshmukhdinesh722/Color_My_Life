import ProductImageUpload from '@/components/admin-view/image-upload';
import AdminProductTile from '@/components/admin-view/productTile';
import CommanForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { AdminPostFormElement, AdminProductFormElement } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewProduct, deleteProduct, editProduct, fetchProduct } from '@/store/adminProductSlice';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const initialFormdata={
    image:null,
    title:'',
    description:'',
    category:'',
    price:'',
    totalStock:''
}


function AdminProducts() {
    const [openCreateProductDialog,setOpenCreateProductDialog]=useState(false);
    const [openCreatePostDialog,setOpenCreatePostDialog]=useState(false);

    const [formData,setFormData]=useState(initialFormdata)

    const [imgFile,setImgFile]=useState(null)
    const[uploadedImgUrl,setUploadeedImgUrl]=useState('')


    const {productList}=useSelector(state =>state.adminProduct)

    const [currentEditedId,setCurrentEditedId]=useState(null)

    const [getCurrentProductId,setcurr]=useState()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchProduct())
        console.log(productList);
        
    },[dispatch])


    const {toast}=useToast()
    function onsubmit(e){
        e.preventDefault();

        currentEditedId !==null? 
        dispatch(editProduct({
            id:currentEditedId,
            formData
        })).then((data)=>{
            console.log(data,"edit");
            if(data?.payload?.success){
                dispatch(fetchProduct())
                setFormData(initialFormdata)
                setOpenCreateProductDialog(false)
                setCurrentEditedId(null)

                toast({
                    title:'product Updated Successfullyy'
                })
            }
        }):

        dispatch(addNewProduct({
            ...formData,
            image:uploadedImgUrl
        })).then((data)=>{
            console.log(data);
            if(data?.payload?.success){
                dispatch(fetchProduct())
                setOpenCreateProductDialog(false)
                setImgFile(null);
                setFormData(initialFormdata)
            
                toast({
                    title:'product Added Successfullyy'
                })
            }
            
        })
         }
         function handleDelete(getCurrentProductId){
            console.log(getCurrentProductId);
            dispatch(deleteProduct(getCurrentProductId))
            .then((data)=>{
                if(data?.payload?.success){
                    dispatch(fetchProduct())
                 
                  
                } 
                toast({
                    title:'product deleted please refresh'
                })
            })
            
         }
    return (
        <Fragment className=''>
            <div className="mb-5 gap-5 w-full flex justify-end">
              
                <Button onClick={()=>setOpenCreateProductDialog(true) } className='text-white bg-gradient-to-r from-cyan-600 to-cyan-950'>
                    Add New Products
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    productList && productList.length >0 ? 
                    productList.map(productItem=> 
                    <AdminProductTile
                    setFormData={setFormData} 
                    setCurrentEditedId={setCurrentEditedId} 
                    setOpenCreateProductDialog={setOpenCreateProductDialog}
                     product={productItem}
                     handleDelete={handleDelete}
                     />)
                    :null
                }
               
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                <Sheet open={openCreateProductDialog} onOpenChange={()=> {
                    setOpenCreateProductDialog(false)
                    setCurrentEditedId(null)                       // jevha edit nasel direct product add karycha asel tr...
                  setFormData(initialFormdata)
                }}>
                    <SheetContent side='right' className='overflow-auto'>
                        <SheetHeader>
                            <SheetTitle>
                                {
                                    currentEditedId!==null?
                                    'Update Product':
                                    'Add new Product'
                                }
                            </SheetTitle>
                        </SheetHeader>
                        <ProductImageUpload 
                        imgFile={imgFile} 
                        setImgFile={setImgFile} 
                        uploadedImgUrl={uploadedImgUrl} 
                        setUploadeedImgUrl={setUploadeedImgUrl}
                        isEditMode={currentEditedId!== null}
                        />
                        <div className="py-6">
                            <CommanForm
                            formControls={AdminProductFormElement}
                            setFormData={setFormData}
                            buttonText={currentEditedId!==null?'Update':'Add'}
                            onSubmit={onsubmit}
                            formData={formData} // Pass formData as an object
                          
                            />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </Fragment>
        
    )
}

export default AdminProducts
