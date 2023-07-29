// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const ExamenModel = db.define('examenes',{
    alumno_materiaId: {type: DataTypes.NUMBER},
    examenNumero: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    nota: {type: DataTypes.NUMBER},
})

export default ExamenModel
