// importamos el Modelo
import EscuelaModel from "../models/EscuelaModel.js";
import buffer from "multer";

import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

import fs, { appendFile } from "fs";
// Leer archivo de imagen


//** Metodos para el CRUD**//

//Mostrar todas las Escuelas
export const getAllEscuelas = async (req, res) => {
  try {
    const escuelas = await EscuelaModel.findAll({
      where: { usuarioId: req.params.usuarioId },
    });
    res.json(escuelas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar una Escuela
export const getEscuela = async (req, res) => {
  try {
    const escuela = await EscuelaModel.findAll({
      where: { id: req.params.id },
    });
    res.json(escuela[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar una Escuela por nombre
export const getEscuelaByNombre = async (req, res) => {
  try {
    const escuela = await EscuelaModel.findAll({
      where: {usuarioId:req.params.usuarioId, nombre: req.params.nombre },
    });
    res.json(escuela[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al verificar la Escuela' });
  }
};







//Crear una Escuela
export const createEscuela = async (req, res) => {
  try {
    await EscuelaModel.create(req.body);

    console.log("Datos guardados correctamente");
    res.status(200).send("Datos guardados correctamente");
  } catch (error) {
    //  res.json( {message: error.message})
    console.error("Error al guardar los datos:", error);
    res.status(500).send("Error al guardar los datos");
  }
};

//Actualizar una Escuela
export const updateEscuela = async (req, res) => {
  try {
    await EscuelaModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Escuela actualizada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar una Escuela
export const deleteEscuela = async (req, res) => {
  try {
    await EscuelaModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Escuela eliminada correctamente!",
    });
  } catch (error) {
    res.status(403);
    res.json({ message: error.message });
  }
};
