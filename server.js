const express=require('express')
const dotenv=require("dotenv")
const { default: mongoose } = require('mongoose')

dotenv.config()
const port = process.env.PORT || 5001
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())
// const connectDB= async () => {
//     try{
//         const connect=await mongoose.connect(process.env.Mongo_uri)
//         console.log("db connected")
//     }
//     catch(err){
//         console.log("db not connected",err.message)
//     }
   
// };
// connectDB()pm 
 app.listen(port,()=>{
    console.log("server is running on 5000 port.....")
})