import express, { Application, application } from "express"
import router from "./routes/mail.routes";
const app:Application=express()


app.use("/api/v1",router)



export default app;