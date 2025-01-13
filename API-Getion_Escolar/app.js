const express = require('express');
const app = express();
const dbconnect = require('./config/db'); // Importar la conexión a la base de datos
const estudiantesRoutes = require('./routes/estudiantes'); // Importar las rutas de libros

app.use(express.json()); // Middleware para interpretar JSON

// Usar las rutas de libros
app.use(estudiantesRoutes);

// Probar la conexión a la base de datos y arrancar el servidor
dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('El servidor está corriendo en el puerto 3000');
    });
}).catch(err => {
    console.error('No se pudo iniciar el servidor debido a un error en la base de datos');
});


/*
-Deploy Vercel
-diseñar que mas hacer
-Reed me
+Midelleware
+ Agregar fotos en la base de datos

*/