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