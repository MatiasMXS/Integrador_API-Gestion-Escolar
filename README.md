# SmartSchool API
SmartSchool API "Gestiona los estudnates de tua escula de manera eficinete"

SmartSchool es una API diseñada para administrar a los alumnos presentes en su colegio. Permitiendo llevar un regitro de todos los estudiantes y a que materias esta inscripto cada uno.

**Funcionalidades**
- Gestión completa de tareas: crear, leer, actualizar, eliminar (CRUD).
- Interfaz responsiva para escritorio.
- Persistencia de datos en MongoDB.
- Filtracion por medio de cursos incriptos

**Teconoligas Utilizadas**
- **Backend**: Node.js, Express.js.
- **Base de Datos**: MongoDB con Mongoose.

**Cómo Instalar y Usar**
Esta app se encuntra deployada en esta pagina
https://integrador-api-gestion-escolar.vercel.app/api 
Se puede utilizar aplicaciones como el **PostMan** para hacer consultas añ servidor.

En caso de que quiera descargarlo para realizar pruebas tiene que realizar los siguientes pasos
1. **Clonar el repositorio**: Para ello debe colocar el siguientre comando en en la terminal:
   git clone https://github.com/MatiasMXS/Integrador_API-Gestion-Escolar.git
2. **Instalar dependencias de la API**: Coloque elñ siguiente comando:
   npm install
3. **Configurar variables de entorno**: Crea un archivo .env en la raíz del backend con estas variables:
   MONGO_URI = mongodb+srv://matifmorenoxd2:0sGezwfGXQd06n6t@gestionescolar.7jqdi.mongodb.net/GestionEscolar?retryWrites=true&w=majority&appName=GestionEscolar
4. **Ejecutar el proyecto**: Para ejecutarlo simpolemente debe usar el conmando
   npm run server

**Estructura del Proyecto**:
Las carpetas del proyecto estan Oragnizadas de la siguientre manera:
taskify/
├── server/         
│   |── config/
|      |──db.js
│   ├── models/
|      |──estudiantesModel.js
│   ├── routes/
|      |──estudiantes.js
├── app.js
├── .env            # Variables de entorno
├── package.json    # Dependencias y scripts
├── vercel.json     # Configuraciones para el deply en el vercel

**Endpoints**
Como ya se mensiono para poder realizar consultas al servidor se debe utilizar el siguiente link
https://integrador-api-gestion-escolar.vercel.app/api
con ese link mas el metodo y la ruta correta se pueden hacer las consultas que se requira. a continucaion se detallaran todas las rutaws y que metodos se necesitan para hacer uso de los endpoits:

| Método | Endpoint | Descripción |
| --- | --- | --- |
| POST | `/api/estudiantes` | Registro de un nuevo Estudiante |
| GET | `/api/estudiantes` | Obtiene todas los Estudiantes registrado |
| GET | `/api/estudiantes/:id` | Obtiene un estudiante segun el id  |
| PUT | `/api/estudiantes/:id` | Actualizacion de estudiante segun el id |
| DELETE | `/api/estudiantes/:id` | Eliminacion de estudiante segun id |
| GET | `/estudiantes/curso/:curso` | Busqueda de todos los estudiantes Incirptos a un curso |
| GET | `/estudiantes/nombre/:nombre` | Busqueda de Estudiantes segun el nombre |

**Créditos y despliegue**
Este proyecto fue desarrollado por Matías Moreno como parte de la entrega del trabajo Integrador del curso del MERN Stack del POLO Tecnologico de la Provincia de La Rioja
Desarrollador: MAtías Moreno
Cuenta de GitHUB: https://github.com/MatiasMXS




Integrador_API-Gestion-Escolar


