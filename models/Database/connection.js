import mongoose from "mongoose";

export const connectDB =()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendApi",
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
})
.then(()=>console.log("db Connected"))
.catch((err)=>console.log(err))

}