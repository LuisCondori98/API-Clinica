import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './router/userRouter.js';
import { citasRouter } from './router/citasRouter.js';
import { doctorRouter } from './router/doctorRouter.js';

const app = express();
const PORT = 8080

app.use(cors())

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect("mongodb+srv://luisbarker11:IvkCQGSAr89lPcCh@cluster.p21e02a.mongodb.net/ClinicaVidaPlena?retryWrites=true&w=majority")
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