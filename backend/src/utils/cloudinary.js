import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name:'dzkwpkrtg',
    api_key:'768878524755812',
    api_secret:'-817fWQk0IKMsu8xRIw58uC1A40',
})

const storage= new multer.memoryStorage();

async function cloudinaryImgUpload(localFilePath){
    const result =await cloudinary.uploader.upload(localFilePath,{
        resource_type:'auto'
    })
    return result;
}

const upload=multer({storage})

export  {upload, cloudinaryImgUpload}