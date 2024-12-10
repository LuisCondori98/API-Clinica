import { Router } from "express";
import doctorModel from "../../DAO/models/doctorModel.js";

export const doctorRouter = Router()

doctorRouter.get("/", async (req, res) => {

  const doctors = await doctorModel.find()

  return res.json(doctors)
})

doctorRouter.post("/", async (req, res) => {

  const body = req.body

  const doctorCreated = await doctorModel.create(body)

  console.log(doctorCreated)

  return res.json("user created")
})

doctorRouter.post("/login", async (req, res) => {

  const body = req.body

  console.log(body.Dni, body.Contrasenia)

  const doctor = await doctorModel.find({ Dni: body.Dni, Contrasenia: body.Contrasenia})

  console.log(doctor)

  if(doctor.length === 0) {

    return res.redirect("http://localhost:5173/registrar")
  }

  return res.json(doctor)
})