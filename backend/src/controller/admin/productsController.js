import { Product } from "../../models/product.model..js";
import { ApiError } from "../../utils/Apierror.utils.js"
import { cloudinaryImgUpload } from "../../utils/cloudinary.js";

const handleImgUpload=async(req,res)=>{

        try {
          const b64 = Buffer.from(req.file.buffer).toString("base64");
          const url = "data:" + req.file.mimetype + ";base64," + b64;
          const result = await cloudinaryImgUpload(url);
      
          res.json({
            success: true,
            result,
          });
        } catch (error) {
          console.log(error);
          res.json({
            success: false,
            message: "Error occured",
          });
        }
      };

      // add new product 
const addProduct=async(req,res)=>{
    try {
        const {image,title,description, category, price,totalStock}=req.body
        const newProduct=new Product({
            image,title,description, category, price,totalStock
        })
        await newProduct.save();
        res.json({
            success:true,
            data:newProduct
        })
    } catch (error) {
        throw new ApiError(401, error.message)
    }
}

      // fetch  product
      const fetchProduct=async(req,res)=>{
        try {
            const listOfProduct=await Product.find({

            })
            res.json({
                success:true,
                data:listOfProduct
            })
        } catch (error) {
            throw new ApiError(401, error.message)
        }
    }
      // edit product 

      const editProduct=async(req,res)=>{
        try {
            const {id}=req.params;
            const {image,title,description, category, price,totalStock}=req.body
            
            const findProduct= await Product.findById(id);
            if(!fetchProduct) return res.json({
                success:false,
                message:'Product not Found'
            });

            findProduct.title=title || findProduct.title
            findProduct.description=description || findProduct.description
            findProduct.category=category || findProduct.category 
            findProduct.price=price || findProduct.price
            findProduct.totalStock=totalStock || findProduct.totalStock
            findProduct.image=image || findProduct.image

            await findProduct.save()

            res.json({
                success:true,
                data:findProduct
            })
        } catch (error) {
            throw new ApiError(401, error.message)
        }
    }
      // delete product
      const deleteProduct=async(req,res)=>{
        try {
            const {id}=req.params;
            const product =await Product.findByIdAndDelete(id);

            if(!product){
                res.json({
                    success:false,
                    message:'Product not Found'
                })
            }
            res.json({
                siccess:true,
                message:'Product deleted '
            })
        } catch (error) {
            throw new ApiError(401, error.message)
        }
    }
export {handleImgUpload,addProduct,fetchProduct,editProduct,deleteProduct}