import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from  "cors";
import dotenv from "dotenv"

import medsRoute from './routes/medsRoute.js';
import gainRoute from './routes/gainRoute.js';
import AddedTodayRoute from './routes/AddedTodayRoute.js';
// import path from 'path';




const app = express();
dotenv.config()


app.use(bodyParser.json({limit:`30mb`,extended:true}));
app.use(bodyParser.urlencoded({limit:`30mb`,extended:true}));

app.use(cors());

//Routes
app.use(`/meds`,medsRoute)
app.use(`/gain`,gainRoute)
app.use(`/AddedToday`,AddedTodayRoute)

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static('pharmacy_project/build'));
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'pharmacy_project','build','index.html'))
//     })
// }





const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,)
.then(()=>{app.listen(PORT,()=>{console.log(`Server Runs On Port : ${PORT}`)})})
.catch((err)=>{ console.log(err.message)})   

