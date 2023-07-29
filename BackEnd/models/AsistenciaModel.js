// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const AsistenciaModel = db.define('asistencias',{
    alumno_materiaId: {type: DataTypes.NUMBER},
    fecha: {type: DataTypes.DATE},
    asistencia: {type: DataTypes.STRING},
})

export default AsistenciaModel