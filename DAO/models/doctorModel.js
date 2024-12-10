import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
  Nombre: String,
  Apellido: String,
  Correo: {
    type: String,
    unique: true,
  },
  Telefono: Number,
  Edad: Number,
  Especialidad: String,
  Dni: {
    type: String,
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
  Direccion: String,
  FechaNacimiento: Date,
  Consultorio: String
})

const doctorModel = mongoose.model('doctor', doctorSchema)

export default doctorModel