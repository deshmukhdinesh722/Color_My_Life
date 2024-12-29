import { Product } from "../../models/product.model..js";

const getFilterProducts=async(req,res)=>{
    try {
        const {category=[],sortBy='low-high'}=req.query

        let filters={}
        
        if(category.length){
            filters.category={$in: category.split(',')}
        }

        let sort={}
        switch (sortBy) {
            case 'low-high':
                sort.price=1
                break;
            case 'high-low':
                sort.price=-1
                break;
            case 'A-Z':
                    sort.title=1
                    break;
            case 'Z-A':
                sort.title=-1
                break;
            default:
                sort.price=1
                break;
        }


        const products=await Product.find(filters).sort(sort)
        res.json({
            success:true,
            data:products
        })      
    } catch (error) {
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })
    }
}
const getAllProductsHome= async(req,res)=>{
    try {
           const listOfHomeProduct=await Product.find()
                res.json({
                    success:true,
                    data:listOfHomeProduct
                }) 
    } catch (error) {
        console.log(error.message);
        
    }
}
const getProductsDetailsHome= async (req,res)=>{
    try {
        const {id}=req.params
    //    console.log(id);
       
        
        const product=await Product.findById(id);
console.log(product);

        if(!product){
            return res.json({
                success:false,
            message:'Product not found' })
        }
        else{
            return res.json({
                success:true,
                data:product
            })
        }
    } catch (error) {
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })
    }
}

const getProductsDetails= async (req,res)=>{
    try {
        const {id}=req.params
        const product=await Product.findById(id);

        if(!product){
            return res.json({
                success:false,
            message:'Product not found' })
        }
        else{
            return res.json({
                success:true,
                data:product
            })
        }
    } catch (error) {
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })
    }
}

export {getFilterProducts,getProductsDetails,getAllProductsHome,getProductsDetailsHome}