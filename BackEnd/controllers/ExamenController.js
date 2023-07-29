// importamos el Modelo
import ExamenModel from "../models/ExamenModel.js";

//** Metodos para el CRUD**//

//Mostrar todas las Notas de examen
export const getAllExamen = async (req, res) => {
  try {
    const examen = await ExamenModel.findAll({
      where: { alumno_materiaId: req.params.alumno_materiaId },
    });
    res.json(examen);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar una Nota de examen
export const getExamen = async (req, res) => {
  try {
    const examen = await ExamenModel.findAll({
      where: { id: req.params.id },
    });
    res.json(examen[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/*
//Crear una Nota de examen
export const createExamen = async (req, res) => {
    try {
        await ExamenModel.create(req.body)
        res.json({
            "message":"¡Nota de examen creada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
*/


//Crear las Notas de examenes
export const createExamen = async (req, res) => {
  try {
//    const ex1 = { examenNumero: 1 };
//    const ex2 = { examenNumero: 2 };
//    const ex3 = { examenNumero: 3 };

    const id = req.body.alumno_materiaId;
    const examenNumero = req.body.examenNumero;
    // const fecha = req.body.fecha;
    //const nota = req.body.nota;

        // Verificar si el examen número 1 ya existe para el alumno

 //       const examenExistente = await ExamenModel.findOne({
          // console.log(relacionId[3].relacion[0].id);
//          where: { alumno_materiaId: id, examenNumero: 1 },          
//        });
//        console.log(examenExistente);

//        if (examenExistente) {
          // El examen número 1 ya existe, por lo tanto, asumimos que los tres exámenes existen
///          return; // Pasar al siguiente alumno sin crear los exámenes nuevamente
//        } else {
          // Crear los exámenes si no existen
          await ExamenModel.create({ alumno_materiaId: id, examenNumero: examenNumero });
//          await ExamenModel.create({ alumno_materiaId: id, examenNumero: 2 });
//          await ExamenModel.create({ alumno_materiaId: id, examenNumero: 3 });
          
          res.json({
            message: "¡Exámenes creados correctamente!",
          });
  //      }
      }catch (error) {
        console.error(error);
        res.status(500).json({ error: "¡ Los Exámenes no se crearon!" });
   
    }   
  
}

//Actualizar una Nota de examen
export const updateExamen = async (req, res) => {
  try {
    await ExamenModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Nota de examen actualizada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar una Nota de examen
export const deleteExamen = async (req, res) => {
  try {
    await ExamenModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Nota de examen eliminada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
