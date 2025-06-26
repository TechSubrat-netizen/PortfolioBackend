import  express from 'express';
import connectDb from './config/connectDb.js';
const app= express();


//API's
app.get('/',((req,res)=>{
    res.send('HEllo world')
}))
//Database connection
connectDb()

// Start the server
app.listen(3000,"localhost",(()=>{
    console.log("app is running on server  http://localhost:3000");
    
}))