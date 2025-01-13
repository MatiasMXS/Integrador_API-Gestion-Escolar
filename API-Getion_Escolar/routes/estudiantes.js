const express = require("express");
const router = express.Router();
const ModelEstudiantes = require("../models/estudiantesMondel");

// Obtener todas las estudiantes
router.get("/estudiantes", async (req, res) => {
  try {
    const estudiantes = await ModelEstudiantes.find();
    res.status(200).send(estudiantes);
  } catch (error) {
    res
      .status(500)
      .send({ mensaje: "Error al obtener las estudiantes", error });
  }
});

// Crear una nueva estudiante
router.post("/estudiantes", async (req, res) => {
  const body = req.body;

  try {
    // Verificar si el email ya existe
    const existeEstudiante = await ModelEstudiantes.findOne({
      email: body.email,
    });
    if (existeEstudiante) {
      return res.status(400).send({ error: "El email ya está registrado." });
    }

    // Validar cursos duplicados
    const cursosDuplicados = body.cursos.filter(
      (curso, index, self) => self.indexOf(curso) !== index
    );
    if (cursosDuplicados.length > 0) {
      return res.status(400).send({
        error: `Cursos duplicados no permitidos: ${cursosDuplicados.join(
          ", "
        )}`,
      });
    }

    // Validar cursos antes de intentar crear el estudiante
    const cursosPermitidos = ["Matemática", "Historia", "Ciencias", "Arte"];
    const cursosInvalidos = body.cursos.filter(
      (curso) => !cursosPermitidos.includes(curso)
    );
    if (cursosInvalidos.length > 0) {
      return res.status(400).send({
        error: `Curso no existente(s): ${cursosInvalidos.join(", ")}`,
      });
    }

    // Crear el nuevo estudiante
    const nuevaEstudiante = await ModelEstudiantes.create(body);
    res.status(201).send(nuevaEstudiante);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).send({ mensaje: error.message });
    }
    res.status(400).send(error);
  }
});

// Obtener una estudiante por ID
router.get("/estudiantes/:id", async (req, res) => {
  try {
    const estudiante = await ModelEstudiantes.findById(req.params.id);
    if (!estudiante) {
      return res.status(404).send({ mensaje: "estudiante no encontrada" });
    }
    res.status(200).send(estudiante);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener la estudiante", error });
  }
});

// Actualizar una estudiante por ID
router.put("/estudiantes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email, cursos } = req.body;

    // Verificar si el email ya está en uso por otro estudiante
    if (email) {
      const estudianteConEmail = await ModelEstudiantes.findOne({ email });
      if (estudianteConEmail && estudianteConEmail._id.toString() !== id) {
        return res.status(400).send({
          mensaje: "El email ya está registrado por otro estudiante.",
        });
      }
    }

    if (cursos) {
      // Validar cursos duplicados
      const cursosDuplicados = cursos.filter(
        (curso, index, self) => self.indexOf(curso) !== index
      );
      if (cursosDuplicados.length > 0) {
        return res.status(400).send({
          error: `Cursos duplicados no permitidos: ${cursosDuplicados.join(
            ", "
          )}`,
        });
      }

      // Validar cursos antes de intentar actualizar el estudiante
      const cursosPermitidos = ["Matemática", "Historia", "Ciencias", "Arte"];
      const cursosInvalidos = cursos.filter(
        (curso) => !cursosPermitidos.includes(curso)
      );
      if (cursosInvalidos.length > 0) {
        return res.status(400).send({
          error: `Curso no existente(s): ${cursosInvalidos.join(", ")}`,
        });
      }
    }

    // Actualizar el estudiante si no hay conflictos
    const estudianteActualizada = await ModelEstudiantes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!estudianteActualizada) {
      return res.status(404).send({ mensaje: "estudiante no encontrada" });
    }
    res.status(200).send(estudianteActualizada);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).send({ mensaje: error.message });
    }
    res
      .status(400)
      .send({ mensaje: "Error al actualizar la estudiante", error });
  }
});

// Eliminar una estudiante por ID
router.delete("/estudiantes/:id", async (req, res) => {
  try {
    const estudianteEliminada = await ModelEstudiantes.findByIdAndDelete(
      req.params.id
    );
    if (!estudianteEliminada) {
      return res.status(404).send({ mensaje: "estudiante no encontrada" });
    }
    res.status(200).send({ mensaje: "estudiante eliminado correctamente" });
  } catch (error) {
    res.status(500).send({ mensaje: "Error al eliminar la estudiante", error });
  }
});

//end points de negocio

router.get("/estudiantes/curso/:curso", async (req, res) => {
  const curso = req.params.curso;
  const filtro = curso ? { cursos: { $in: [curso] } } : {};

  try {
    const query = {};
    if (curso) query.curso = curso;

    const estudiantes = await ModelEstudiantes.find(filtro);
    if (!estudiantes.length) {
      return res
        .status(404)
        .send({ mensaje: "No se encontraron estudiantes con el curso" });
    }

    res.status(200).send(estudiantes);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al buscar estudiantes", error });
  }
});

router.get('/estudiantes/nombre/:nombre', async (req, res) => {
  const nombre = req.params.nombre; 

  try {
      const query = {};
      if (nombre) {
        query.$or = [
          { nombre: { $regex: nombre, $options: 'i' } },
          { apellido: { $regex: nombre, $options: 'i' } }
      ];
    }

    const estudiantes = await ModelEstudiantes.find(query);
      if (!estudiantes.length) {
          return res.status(404).send({ mensaje: 'No se encontraron estudiantes con ese nombre' });
      }

      res.status(200).send(estudiantes); 
  } catch (error) {
      res.status(500).send({ mensaje: 'Error al buscar estudiante', error });
  }
});

module.exports = router;
