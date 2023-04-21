import express from "express";
const app = express();
import userRouter from "./routes/users.js";
import taskRouter from "./routes/task.js";
import { connectDB } from "./Database/connection.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"



config({
    path:"./data/config.env"
})

// using middleware  to access form data in json
// first ye ana chayiye badd mein router wali file ka mention nhi to code nhi chalega
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
// to access routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);
app.use(errorMiddleware)


app.get("/", (req, res) => {
    res.send(`nice`)
})

connectDB();
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})

