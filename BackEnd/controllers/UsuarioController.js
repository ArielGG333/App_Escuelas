import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno de .env

import UsuarioModel from "../models/UsuarioModel.js";

// Método para encriptar la contraseña antes de guardarla en la base de datos
UsuarioModel.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

// Login de usuario
export const getUsuario = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Buscar el usuario en la base de datos
    const usuario = await UsuarioModel.findOne({ where: { userName } });
    if (!usuario) {
      return res
        .status(401)
        .json({ message: "Credenciales inválidas (userName)" });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
      return res
        .status(402)
        .json({ message: "Credenciales inválidas (password)" });
    } 

    // retorno el id del usuario para filtrar las escuelas relacionadas
    const usuarioId = usuario.id;

    // Generar un token de autenticación
    const accessToken = jwt.sign({ userName }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res
    .json({ accessToken, usuarioId })
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor (catch (error))" });
  }
};

// Registro de un nuevo usuario
export const CreateUsuario = async (req, res) => {
    try {
      const { userName, password, email } = req.body;
  
      // Verificar si el usuario ya existe en la base de datos
      const existingUserName = await UsuarioModel.findOne({
        where: { userName },
      });
      if (existingUserName) {
        return res
          .status(401)
          .json({ message: "El nombre de usuario ya está registrado" });
      }
      // Verificar si el usuario ya existe en la base de datos
      const existingEmail = await UsuarioModel.findOne({
        where: { email },
      });
      if (existingEmail) {
        return res
          .status(402)
          .json({ message: "El email de usuario ya está registrado" });
      }
  
      // Crear un nuevo usuario
      const newUser = await UsuarioModel.create({ userName, password, email });
  
      res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
