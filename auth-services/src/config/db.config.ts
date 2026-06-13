import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


export const dbConnection=async():Promise<void>=>{
   try{
    const MONGODB_URL=process.env.MONGODB_URL;
    if(!MONGODB_URL){
        console.log("mongodb url not found")
        process.exit(1)
    }
    await mongoose.connect(MONGODB_URL)
    console.log("DataBase is connected successfully")
   }
   catch(error){
   if(error instanceof Error){
    console.log("Auth server db connection faield",error.message)
    process.exit(1)
   }
   else{
    console.log("Auth server db connection faield with some unknown erreor",error)
    process.exit(1)
   }
    
   }
}