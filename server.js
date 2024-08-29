const express=require('express')
const dotenv=require("dotenv")
const { default: mongoose } = require('mongoose')
const blogroutes=require('./routes/blogroutes')

dotenv.config()
const port = process.env.PORT || 5001
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())
app.get('/', (req,res) =>{
return res.status(200); 
}) 
const connectDB= async () => {
    try{
        const connect=await mongoose.connect(process.env.mongo_uri)
        console.log("db connected")
    }
    catch(err){
        console.log("db not connected",err.message)
    }
   
};
connectDB()
 app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
app.use('/api',blogroutes)
