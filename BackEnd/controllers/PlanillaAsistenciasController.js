import AsistenciaModel from "../models/AsistenciaModel.js"
import { Sequelize } from "sequelize";

//Obtener datos
export const getDatos = async (req, res) => {
    const { materiaId } = req.params;
    const { alumnoId } = req.params;
    
    try {
      const datos = await AsistenciaModel.sequelize.query(
        "CALL obtenerDatosAsistencias(:materiaId, :alumnoId)",
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

