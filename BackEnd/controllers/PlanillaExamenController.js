import ExamenModel from "../models/ExamenModel.js"

import { Sequelize } from "sequelize";

//Obtener datos
export const getDatos = async (req, res) => {
    const { materiaId } = req.params;
    const { alumnoId } = req.params;
    
    try {
      const datos = await ExamenModel.sequelize.query(
        "CALL obtenerDatosExamen(:materiaId, :alumnoId)",
        {
          replacements: { materiaId, alumnoId}
        },
      );
      res.json(datos);
      return datos
    } catch (error) {
     // console.error(error);
     // res.status(500).json({ error: "Error al obtener los datos" });
    }
  };







//Crear examen
/*
export const crearExamen = async (req, res) => {
    const { materiaId } = req.params;
    const { alumnoId } = req.params;
    const { examenNumero } = req.params;
    //const { fecha } = req.params;
    try {
      const examen = await ExamenModel.sequelize.query(
        "CALL crearExamen2(:materiaId, :alumnoId, :examenNumero)",
        {
          replacements: { materiaId, alumnoId, examenNumero}
        },
      );
      res.json(examen);
      return examen
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los alumnos" });
    }
  };
*/

