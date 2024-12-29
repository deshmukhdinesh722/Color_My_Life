// ek wrapper banavne jenekarun apn he kuthehi use karu shakto
// yamule aplyala sarkha sarkha try-cathch/async-await use karychyi garaj nahii  

const asyncHandeler=(fun)=>async(req,res,next)=>{
    try {
        await fun(req,res,next)    
    } catch (err) {
     console.log(err);
     
    }
    }
    
    
    
    export {asyncHandeler}

// ONLY FOR PRACTICE
