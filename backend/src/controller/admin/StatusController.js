import { Status } from "../../models/status.model.js"



const addStatus=async(req,res)=>{
  try {
    const{userId}=req.params

      const {status}=req.body
  
console.log(status);

      if(!status || !userId){
        res.json({
            success:false,
            message:'status not found'
        })
      }
  
        const  s = new Status({ userId,items:[{status:status}] });
        

        await s.save()
   
      res.json({
        success:true,
        data:s
      })
  
  } catch (error) {
    console.log(error);
    
  }

}

const editStatus=async(req,res)=>{
    try {
        const {userId}=req.params
        const {status}=req.body
   
    
        if(!status){
          res.json({
              success:false,
              message:'status not found'
          })
        }
  
        // const  edit= await Status.find({ userId})

// edit.items.status=status;
// console.log(edit);


        // edit.items.map(item=>
        //   item.status=status)
  
        // if(!edit){
        //   res.json({
        //       success:false,
        //       message:'Something went wrong !'
        //   })
  
        // }
  
      //  await edit.save();
        res.json({
          success:true,
          data:status
        })
    
    } catch (error) {
      console.log(error);
      
    }
  
  }

  const fetchStatus=async(req,res)=>{
    try {
        const {userId}=req.params
    
        if(!userId){
          res.json({
              success:false,
              message:'Id not found'
          })
        }
  
        const status=await Status.find({
            userId
        })
  
        if(!status){
          res.json({
              success:false,
              message:'Something went wrong !'
          })
  
        }
  
        res.json({
          success:true,
          data:status
        })
    
    } catch (error) {
      console.log(error);
      
    }
  
  }
const deleteStatus= async(req,res)=>{
try {
    const {id}=req.params;
  
    const d=await Status.findByIdAndDelete(id);
    if(!d){
      res.json({
        success:false,
        message:'not found'
      })
    }
    res.json({
      success:true,
      message:'Deleted'
    })
    
} catch (error) {
  console.log(error);
  
}


}

export {addStatus,fetchStatus,editStatus,deleteStatus}