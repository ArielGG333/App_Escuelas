// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const AlumnoMateriaModel = db.define('alumnos_materias',{   
    alumnoId: {type: DataTypes.NUMBER},
    materiaId: {type: DataTypes.NUMBER},
})

export default AlumnoMateriaModel