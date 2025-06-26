import mongoose, { mongo } from "mongoose";
let databaseUrl='mongodb://127.0.0.1:27017/Portfolio'
 const  connectDb= async ()=>{
    try {
       await mongoose.connect(databaseUrl);

       console.log("Datbase is connected");    
       
    } catch (error) {
       console.error(" Failed to connect dtabase",error)  
    }
 }
 export default connectDb