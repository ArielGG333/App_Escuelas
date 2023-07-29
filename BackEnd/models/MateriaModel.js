// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const MateriaModel = db.define('materias', {

    cursoId: {type: DataTypes.NUMBER},
    nombre: {type: DataTypes.STRING},
    profesor: {type: DataTypes.STRING},
    dias: { type: DataTypes.JSON },
//    dias: {type: DataTypes.STRING},
//    horaDesde: {type: DataTypes.TIME},
//    horaHasta: {type: DataTypes.TIME},
})

export default MateriaModel