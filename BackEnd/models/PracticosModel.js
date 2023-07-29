// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const PracticosModel = db.define('practicos', {
    alumno_materiaId: {type: DataTypes.NUMBER},
    tpNumero: {type: DataTypes.STRING},
    fecha: {type: DataTypes.DATE},
    nota: {type: DataTypes.NUMBER},
})

export default PracticosModel