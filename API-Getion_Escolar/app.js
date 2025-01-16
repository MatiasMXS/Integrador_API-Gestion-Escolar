require("dotenv").config();
const express = require('express');
const app = express();
const dbconnect = require('./config/db'); // Importar la conexión a la base de datos
const estudiantesRoutes = require('./routes/estudiantes'); // Importar las rutas de libros
const cors =require ('cors');

app.use(express.json()); // Middleware para interpretar JSON

//CORS
app.use(cors())
// Usar las rutas de tareas
app.use("/api", estudiantesRoutes);

app.get('/api/test', (req,res) =>{
    res.send('La aplicacion está funcionando correctamente')
  });
  
  
  
  // Probar la conexión a la base de datos y arrancar el servidor
  dbconnect()
    .then(() => {
      console.log("El servidor está corriendo");
    })
    .catch((err) => {
      console.error(
        "No se pudo iniciar el servidor debido a un error en la base de datos"
      );
    });
  module.exports = app;

/*
-diseñar que mas hacer
-Reed me
+Midelleware
+ Agregar fotos en la base de datos

*/