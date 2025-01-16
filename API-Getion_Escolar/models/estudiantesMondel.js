const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estudiantesSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  myFile : String,
  cursos: [
    {
      type: String,
      enum: ["Matemática", "Historia", "Ciencias", "Arte"],
      required: true,
      message: "Curso no existente: {VALUE}",
    },
  ],
});

const ModelEstudiantes = mongoose.model("Estudiantes", estudiantesSchema);
module.exports = ModelEstudiantes;
