import {Address} from '../../models/address.models.js'

const allUserAdddress= async(req,res)=>{
    try {
        const { userId } = req.params;

        if(!userId){

            res.json({
                success:false,
                meaasge:'UserId not Found'
            })
        }

        const address=await Address.find({userId})
        console.log("address",address);
        
        res.json({
            success:true,
            data:address
        })
  
    } catch (error) {
        console.log(error);
        
    }
}

export {allUserAdddress}