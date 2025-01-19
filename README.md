# Integrador: API Gestión Escolar  

**"Gestiona los estudiantes de tu escuela de manera eficiente"**  

Esta API está diseñada para administrar alumnos en un colegio, permitiendo llevar un registro completo de los estudiantes y las materias en las que están inscritos.  

---

## 🚀 Funcionalidades
- Gestión completa de estudiantes: **Crear, Leer, Actualizar, Eliminar (CRUD)**.
- Almacenamiento de imágenes de estudiantes en formato **Base64**.
- Persistencia de datos en **MongoDB**.
- Filtración de estudiantes por los cursos en los que están inscritos.  

---

## 💻 Tecnologías Utilizadas
- **Entorno de ejecución:** Node.js  
- **Framework:** Express.js  
- **Base de Datos:** MongoDB  
- **ODM:** Mongoose  
- **Manejo de variables de entorno:** dotenv  

---

## ⚙️ Cómo Instalar y Usar

Esta API está deployada y accesible desde:  
[🔗 Integrador API Gestión Escolar](https://integrador-api-gestion-escolar.vercel.app/api)  

Se recomienda usar herramientas como **Postman** para interactuar con los endpoints.  

### Opcional: Instalar Localmente
1. **Clonar el repositorio**:  
   ```bash
   git clone https://github.com/MatiasMXS/Integrador_API-Gestion-Escolar.git

2. **Instalar dependencias de la API**: Coloque el siguiente comando:  
   ```bash
   npm install
3. **Configurar variables de entorno**: Crea un archivo .env en la raíz del backend con estas variables:
   ```bash
   MONGO_URI = mongodb+srv://matifmorenoxd2:0sGezwfGXQd06n6t@gestionescolar.7jqdi.mongodb.net/GestionEscolar?retryWrites=true&w=majority&appName=GestionEscolar
5. **Ejecutar el proyecto**: Para ejecutarlo simplemente debe usar el comando
    ```bash
   npm run server
---
## 📂 **Estructura del Proyecto**  
Las carpetas del proyecto están organizadas de la siguiente manera:  

```bash
API-Gestion_Escolar/  
|── config/         # Configuración de la base de datos
|   └── db.js
├── models/         # Modelos
|   └── estudiantesModel.js
├── routes/         # Rutas de la API
|   └── estudiantes.js
├── app.js
├── .env            # Variables de entorno
├── package.json    # Dependencias y scripts
├── vercel.json     # Configuraciones para el deploy en Vercel
```
---
## 📚**Endpoints**
Como ya se mencionó para poder realizar consultas al servidor se debe utilizar el siguiente link
https://integrador-api-gestion-escolar.vercel.app/api
con ese link mas el método y la ruta correcta se pueden hacer las consultas que se requiera. A continuación se detallaran todas las rutas y qué métodos se necesitan para hacer uso de los endpoints:

| Método | Endpoint | Descripción |
| --- | --- | --- |
| POST | `/api/estudiantes` | Registro de un nuevo Estudiante |
| PUT | `/api/estudiantes/:id` | Actualización de estudiante según el id |
| DELETE | `/api/estudiantes/:id` | Eliminación de estudiante según id |
| GET | `/api/estudiantes` | Obtiene todas los Estudiantes registrado |
| GET | `/api/estudiantes/:id` | Obtiene un estudiante según el id  |
| GET | `/estudiantes/curso/:curso` | Búsqueda de todos los estudiantes Inscriptos a un curso |
| GET | `/estudiantes/nombre/:nombre` | Búsqueda de Estudiantes según el nombre |

#🔍*Validaciones*
Los endpoints de POST y PUT para crear estudiantes y para actualizar uno ya existente, cuentan con validaciones que no permiten crear o actualizar estudiantes si:
- tiene el mismo mail que uno ya existente en la Base de datos
- Se inscribe en un curso no existente. Los únicos cursos existentes son: - **Matemática, Historia, Ciencias, Arte**
- Se inscribe o se coloca un mismo curso valido mas de una vez

#*Estructura*
Para Crear o actualizar un estudiante,la consulta debe tener la siguiente estructura:
```bash
{
  "nombre": "Matias",
  "apellido": "Moreno",
  "email": "matias.moreno@example.com",
  "cursos": ["Ciencias, Historia"],      #arry de cusos incriptos
  "myFile": "data:image/jpeg;base64,"    #Imagen en Base64    
}
```
---

##👨‍💻**Créditos y despliegue**
Este proyecto fue desarrollado por Matías Moreno como parte de la entrega del trabajo Integrador del curso del MERN Stack del POLO Tecnologico de la Provincia de La Rioja
Desarrollador: MAtías Moreno
Cuenta de GitHUB: https://github.com/MatiasMXS



