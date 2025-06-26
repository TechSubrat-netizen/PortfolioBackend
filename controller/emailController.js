
import emailModel from '../Model/emailModel.js';
 const emailData= async (req,res)=>{
    try {
         const {email}=req.body;
         if(email){
          await emailModel.insertOne({email})
          res.send(200,{msg:"Email  inserted succesfully"})
         }
    } catch (error) {
        
    }
 }
 export default emailData