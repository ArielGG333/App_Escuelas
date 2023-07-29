// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const AlumnoModel = db.define('alumnos',{   
    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    dni: {type: DataTypes.NUMBER},
    observaciones: {type: DataTypes.STRING},
})

export default AlumnoModel