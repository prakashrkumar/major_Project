import mongoose from "mongoose";

interface IOtp{
    email:String,
    otp:String;
    createdAt:Date;
}

const otpSchema=new mongoose.Schema<IOtp>({
    email:{
        type:String,
        required:[true,"emailed is missing"]

    },
  otp:{
    type:String,
    required:[true," otp isrequired"],
    maxLength:4
  },
  createdAt:{
    type:Date,
    default:Date.now(),
    expires:5*60
  } 
})

export const Otp=mongoose.model<IOtp>("Otp",otpSchema)