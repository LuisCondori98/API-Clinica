import { Router } from "express";
import userModel from "../../DAO/models/userModel.js";

export const userRouter = Router()

userRouter.get("/", async (req, res) => {

  const users = await userModel.find()

  return res.json(users)
})

userRouter.get("/pacientes", async (req, res) => {

  const users = await userModel.find({ Role: "Paciente"})

  console.log(users)

  return res.json(users)
})

userRouter.post("/register", async (req, res) => {

  const body = req.body

  const userCreated = await userModel.create(body)

  console.log(userCreated)

  setTimeout(() => {

    return res.redirect("http://localhost:5173/inicio")
  }, 2000)
})

userRouter.post("/login", async (req, res) => {

  const body = req.body

  console.log(body.Dni, body.Contrasenia)

  const user = await userModel.find({ Dni: body.Dni, Contrasenia: body.Contrasenia})

  console.log(user)

  if(user.length === 0) {

    return res.redirect("http://localhost:5173/registrar")
  }

  return res.json(user)
})