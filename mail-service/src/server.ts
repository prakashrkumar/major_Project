import app from "./app"
import dotenv from "dotenv"
dotenv.config();


const PORT=process.env.PORT || 7000;



app.listen(PORT,()=>{
  console.log(`Mail service is successfully running at port ${PORT}`)  
})