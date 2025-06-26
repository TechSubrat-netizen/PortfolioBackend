import mongoose from "mongoose";
 const emailSchema= new mongoose.Schema({
    email:{type:String,require:true}
 })
 export default emailSchema