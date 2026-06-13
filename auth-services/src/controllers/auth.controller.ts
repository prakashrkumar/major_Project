
import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { registerUser } from "../services/auth.services";
import { ApiResponse } from "../types/apiResponse.type";


export const sendEmailService = async (req: Request, res: Response) => {
  try{
const {fullName,email,password,role}=req.body ;
if (!fullName || !email || !password || !role) {
    throw new AppError("Please fill all input fields", 400);
}
if (password.length < 8) {
    throw new AppError("Password must be at least 8 characters", 400);
}
// service call
const newOtp = await registerUser({ fullName, email, password, role });
res.status(201).json({
    success: true,
    message: "OTP generated successfully",
    data: newOtp,
} as ApiResponse<typeof newOtp>)
  }
  catch(error:any){
    console.log(error)
    res.status(error.statusCode || 500).json({
        success:false,
        message:error.message || "Internal server errro"
    })

  } 



}