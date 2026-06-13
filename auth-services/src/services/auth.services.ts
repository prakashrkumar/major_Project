import axios from "axios";
import { Otp } from "../models/otp.model";
import { User } from "../models/user.model";
import { AppError } from "../utils/AppError";
import otp from "otp-generator";
import { sendMailTemplate } from "../templetes/mail.templates";

export interface IUserData {
    fullName: string;
    email: string;
    password: string;
    role: "User" | "Worker" | "Admin";
}

export const registerUser = async (data: IUserData) => {
    const { email, password, fullName, role } = data;
    const isExist = await User.findOne({ email });
    if (isExist) {
        throw new AppError("User email already exists", 409);
    }

    const newOtp = otp.generate(4, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });

    const otpDoc = await Otp.create({
        email,
        otp: newOtp,
    });
    const mailData={
email:email,
subject:"for otp verifaction only",
body:sendMailTemplate(Number(newOtp)),
from:"prakash_Developer"
    }
  const mailServiceCall=await axios.post("http://localhost:5000/api/v1/send-mail",mailData)
    return otpDoc;
};
