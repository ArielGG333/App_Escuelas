// importamos la coneccion a la DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const EscuelaModel = db.define('escuelas',{
    usuarioId: {type: DataTypes.NUMBER,
        allowNull: false},
    nombre: {type: DataTypes.STRING,
        allowNull: false},
    direccion: {type: DataTypes.STRING,
        allowNull: false},
    telefono: {type: DataTypes.NUMBER,
        allowNull: true},
})

export default EscuelaModel

