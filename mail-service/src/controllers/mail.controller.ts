import express, {Request,Response} from "express"
import { AppError } from "../utils/appError";
import { ApiResponse } from "../types/apiRespnse";
import { sendMailService } from "../services/mail.services";
export interface IMailData{
    email:string;
    subject:string;
    body:string,
    from :string,
}
export const sendMailController=async(req:Request,res:Response)=>{
    try{
 const {email,subject,body,from}=req.body 
 // validation
 if(!email|| !subject|| !body|| !from){
    throw new AppError("data is not sufficient to mail",400)

 }
 // mail services ke call 
 const mailSend=await sendMailService({
  email,from,body,subject  
 })
 res.status(200).json({
    success:true,
    message:"otp send successfully"
 } as ApiResponse<null>)
    }
    catch(error:any){
        console.log(error)
        res.status(error.statusCode || 500).json({
            success:false,
            message:error.message || "Internal server error"
        })

    }
}