
import PracticosModel  from "../models/PracticosModel.js"
import { Sequelize } from "sequelize";

//Obtener datos
export const getDatos = async (req, res) => {
    const { materiaId } = req.params;
    const { alumnoId } = req.params;
    
    try {
      const datos = await PracticosModel.sequelize.query(
        "CALL obtenerDatosPracticos(:materiaId, :alumnoId)",
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

