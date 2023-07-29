// importamos el Modelo
import PracticosModel from "../models/PracticosModel.js";

//** Metodos para el CRUD**//

//Mostrar todas las Notas de tp
export const getAllPracticos = async (req, res) => {
    try {
        const practicos = await PracticosModel.findAll({
            where: { alumno_materiaId: req.params.alumno_materiaId }
        })
        res.json(practicos)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Mostrar una Nota de tp
export const getPractico = async (req, res) => {
    try {
        const practico = await PracticosModel.findAll({
            where: { id: req.params.id }
        })
        res.json(practico[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

/*
//Crear una Nota de tp
export const createPractico = async (req, res) => {
    try {
        await PracticosModel.create(req.body)
        res.json({
            "message":"¡Nota de tp creada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
*/

export const createPractico = async (req, res) => {
    try {
//      const ex1 = { tpNumero: 1 };
//      const ex2 = { tpNumero: 2 };
//      const ex3 = { tpNumero: 3 };
  
      const id = req.body.alumno_materiaId;
      const tpNumero = req.body.tpNumero;
      // const fecha = req.body.fecha;
      //const nota = req.body.nota;
  
          // Verificar si el tp número 1 ya existe para el alumno
  
//          const tpExistente = await PracticosModel.findOne({
            // console.log(relacionId[3].relacion[0].id);
//            where: { alumno_materiaId: id, tpNumero: 1 },          
//          });
//          console.log(tpExistente);
  
//          if (tpExistente) {
            // El Practico número 1 ya existe, por lo tanto, asumimos que los tres practicos existen
//            return; // Pasar al siguiente alumno sin crear los practicos nuevamente
//          } else {
            // Crear los Practicos si no existen
            await PracticosModel.create({ alumno_materiaId: id, tpNumero: tpNumero});
//            await PracticosModel.create({ alumno_materiaId: id, tpNumero: 2 });
//            await PracticosModel.create({ alumno_materiaId: id, tpNumero: 3 });
            
            res.json({
              message: "Practicos creados correctamente!",
            });
//          }
        }catch (error) {
          console.error(error);
          res.status(500).json({ error: "¡ Los Practicos no se crearon!" });
     
      }   
    
  }





//Actualizar una Nota de tp
export const updatePractico = async (req, res) => {
    try {
        await PracticosModel.update(req.body, {
        where: {id: req.params.id}
        })
        res.json({
            "message":"¡Nota de tp actualizada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Eliminar una Nota de tp
export const deletePractico = async (req, res) => {
    try {
        await PracticosModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"¡Nota de tp eliminada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}