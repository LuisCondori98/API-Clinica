import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  Nombre: String,
  Apellido: String,
  Correo: {
    type: String,
    unique: true
  },
  Telefono: Number,
  Direccion: String,
  Edad: Number,
  Dni: {
    type: Number,
    unique: true
  },
  Contrasenia: {
    type: String,
    unique: true
  },
  Role: {
    type: String,
    default: "Paciente",
  },
  Cita: [{ type: String}],
  HoraCita: String,
  FechaCita: String,
})

const userModel = mongoose.model('user', userSchema)

export default userModel