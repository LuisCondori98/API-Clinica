import { Router } from "express";
import userModel from "../../DAO/models/userModel.js";

export const citasRouter = Router()

citasRouter.post("/", async (req, res) => {

  const body = req.body;

  console.log(body)

  await userModel.create(body)

  return res.redirect("http://localhost:8080/profile")
})