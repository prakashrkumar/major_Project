import app from "./app"
import dotenv from "dotenv"
dotenv.config()
import { dbConnection } from "./config/db.config";

const PORT=process.env.PORT || 5000;

//dbConnection
dbConnection()







app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)

})










