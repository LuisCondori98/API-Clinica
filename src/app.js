import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import { userRouter } from './router/userRouter.js';
import { citasRouter } from './router/citasRouter.js';
import { doctorRouter } from './router/doctorRouter.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors())

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Mongo")
  })
  .catch(err => {
    console.log(err.message)
  })

app.use("/api/users", userRouter)
app.use("/api/citas", citasRouter)
app.use("/api/doctores", doctorRouter)

app.get("/", (req, res) => {

  return res.json({
    status: "success",
    date: new Date().toLocaleString()
  })
})

app.listen(PORT, () => console.log(`puero corriendo en http://localhost:${PORT}`))