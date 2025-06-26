import emailSchema from "../Schema/emailSchema.js";
import mongoose from "mongoose";
const emailModel=mongoose.model('Email',emailSchema);
export default  emailModel