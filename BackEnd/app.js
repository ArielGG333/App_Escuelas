import express from "express";
import cors from "cors";
// importamos la conexion a la DB
import db from "./database/db.js";
// importamos los enrutadores
import routes from "./routes/routes.js";
import routerCursos from "./routes/routesCursos.js";
import routerMaterias from "./routes/routesMaterias.js";
import routerAlumnos from "./routes/routesAlumnos.js";
import routerAsistencias from "./routes/routesAsistencias.js";
import routerExamen from "./routes/routesExamen.js";
import routerPractico from "./routes/routesPracticos.js";

import routerUsuario from "./routes/routesUsuario.js";

import routerDocsYPdf from "./routes/routesDocsYPdf.js";
import routerDocsExistenceChecker from "./routes/routesDocsExistenceChecker.js";
import routerImages from "./routes/routesImages.js";
import routerPlanillaExamen from "./routes/routesPlanillaExamen.js";
import routerPlanillaPractico from "./routes/routesPlanillaPractico.js";
import routerPlanillaAsistencia from "./routes/routesPlanillaAsistencia.js"
// import routerGenerarDocumento from "./routes/routesGenerarDocumento.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/usuario", routerUsuario);

app.use("/escuela", routes);
app.use("/curso", routerCursos);
app.use("/materia", routerMaterias);
app.use("/alumno", routerAlumnos);

app.use("/alumnos_materias", routerAlumnos);

app.use("/asistencia", routerAsistencias);
app.use("/examen", routerExamen);
app.use("/practico", routerPractico);

app.use("/uploadDocs", routerDocsYPdf);
app.use("/api/files", routerDocsExistenceChecker);

app.use("/uploadImages/", routerImages);

app.use("/planillaExamen", routerPlanillaExamen)
app.use("/planillaPractico", routerPlanillaPractico)
app.use("/planillaAsistencia", routerPlanillaAsistencia)

//app.use("/generarDocumento", routerGenerarDocumento)

try {
  await db.authenticate();
  console.log("Conexion exitosa a la DB");
} catch (error) {
  console.log(`El error de la conexion es: ${error}`);
}

/*
app.get('/', (req, res) =>{
    res.send('Hola Mundo')
})
*/



//  app.listen(8000, () => {
  app.listen(3306, () => {
//  console.log("Servidor corriendo en puerto http://localhost:8000");
  console.log("Servidor corriendo en puerto http://sql10.freemysqlhosting.net:3306");
  
 
});
