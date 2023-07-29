// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const CursoModel = db.define('cursos',{
    escuelaId: {type: DataTypes.NUMBER,
        allowNull: false},
    anio: {type: DataTypes.NUMBER,
        allowNull: false},
    grado: {type: DataTypes.STRING,
        allowNull: false},
    division: {type: DataTypes.STRING,
        allowNull: false},
    turno: {type: DataTypes.STRING,
        allowNull: false},
})

export default CursoModel