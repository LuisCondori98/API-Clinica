import { Router } from "express";
import userModel from "../../DAO/models/userModel.js";
import doctorModel from "../../DAO/models/doctorModel.js";

export const userRouter = Router()

userRouter.get("/", async (req, res) => {

  const users = await userModel.find()

  return res.json(users)
})

userRouter.get("/:id", async (req, res) => {

  const id = req.params.id

  console.log(id)

  const userOne = await userModel.findOne({ _id: id })

  return res.json(userOne)
})

userRouter.get("/pacientes", async (req, res) => {

  const users = await userModel.find({ Role: "Paciente" })

  console.log(users)

  return res.json(users)
})

userRouter.post("/register", async (req, res) => {

  const body = req.body

  const userCreated = await userModel.create(body)

  console.log(userCreated)

  setTimeout(() => {

    return res.redirect("https://clinicavidaplena.vercel.app//inicio")
  }, 2000)
})

userRouter.post("/login", async (req, res) => {

  const body = req.body

  console.log(body)

  const user = await userModel.find({ Dni: body.Dni, Contrasenia: body.Contrasenia})

  console.log(user)

  if(user.length === 0) {

    return res.redirect("https://clinicavidaplena.vercel.app//registrar")
  }

  return res.json(user)

  // if(body.Role = "Doctor") {

  //   const doctor = await doctorModel.find({ Dni: body.Dni, Contrasenia: body.Contrasenia})

  //   if(doctor.length === 0) {

  //     return res.redirect("http://localhost:5173/registrar")
  //   }
  
  //   return res.json(doctor)
  // }
})