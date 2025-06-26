import  express from 'express';
import connectDb from './config/connectDb.js';
import emailRoute from './Routes/emailRoute.js';
const app= express();
//Routing
app.use('/email',emailRoute)

//Database connection
connectDb()

// Start the server
app.listen(3000,"localhost",(()=>{
    console.log("app is running on server  http://localhost:3000");
    
}))