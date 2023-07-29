// importamos la  DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const UsuarioModel = db.define('usuarios',{
    userName: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
})

export default UsuarioModel