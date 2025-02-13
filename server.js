import express from "express";
import dotenv from "dotenv";
import dncrRoutes from "./routes/dncr.routes.js"

dotenv.config();
const app = express();

app.use(express.json())



app.get("/",(req,res)=>{
    //root route http://localhost:5000/
    res.send("Hello World !!")
})

// app.get("/api/GetAccounts",(req,res)=>{
// console.log("Get Accounts")
// });

// app.get("/api/DNCRCheck",(req,res)=>{
//     console.log("DNCR Check")
//     });

app.use("/api/dncr",dncrRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`));
