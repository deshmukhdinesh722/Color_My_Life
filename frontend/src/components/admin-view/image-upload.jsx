import React, { useEffect, useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { File, UploadCloudIcon, XCircleIcon } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';



function ProductImageUpload({imgFile,setImgFile,uploadedImgUrl,setUploadeedImgUrl,isEditMode}) {
const inputRef=useRef()
console.log(isEditMode);

function imgFileChange(e){
    e.preventDefault();
    const selectedFiles=e.target.files?.[0]
    if(selectedFiles) setImgFile(selectedFiles)

    
}
function handleDragOver(e){
e.preventDefault();

}
function handleDrop(e){
e.preventDefault();
const dropFile=e.dataTransfer.files?.[0];
if(dropFile) setImgFile(dropFile)
}

function removeImg(e){
e.preventDefault();
setImgFile(null);
if(inputRef.current){
    inputRef.current.value=''
}
}

async function  uploadOnCloudinary() {
   
    const data =new FormData();
data.append('file', imgFile);
const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/product/upload-img`,data)
console.log(response.data);

if(response.data?.success){
    setUploadeedImgUrl(response.data.result.url)
}
}

useEffect(()=>{
if(imgFile !== null){
    uploadOnCloudinary()
    
}
},[imgFile])
    return (
        <div className="w-full max-w-md mx-auto mt-4">
            <Label className='text-lg font-semibold mb-2 block'>
                Upload Image
            </Label>
            <div onDragOver={handleDragOver} onDrop={handleDrop} className='border-2 border-separate rounded-lg p-4 '>
                <Input id='img-upload' type='file' className='hidden' ref={inputRef} onChange={imgFileChange} disabled={isEditMode} />
            {
                !imgFile ?
                <Label htmlFor='img-upload'   className={`${isEditMode ? 'cursor-not-allowed':''} flex flex-col items-center justify-center h-32 cursor-pointer`}>
                    <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2'/>
                    <span>
                        Drag & Drop or click to upload image
                    </span>
                </Label>:<div className='flex items-center justify-between '>
                    <div className="flex items-center ">
                        <File className='w-7 h-8 text-primary mr-2'/>
                        <p className="text-sm font-medium ">{imgFile.name}</p>
                        <Button variant="ghost" size ='icon' className='text-muted-foreground hover:text-foreground' onClick={removeImg}>
                            <XCircleIcon className='h-4 w-4'/>
                            <span className='sr-only '>Remove File</span>
                        </Button>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}



export default ProductImageUpload
