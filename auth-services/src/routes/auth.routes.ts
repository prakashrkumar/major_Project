import express from "express"
import { sendEmailService } from "../controllers/auth.controller"

const router=express.Router()



router.post("/send-mail",sendEmailService)



export default router;