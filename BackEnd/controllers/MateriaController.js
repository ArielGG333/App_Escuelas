// importamos el Modelo
import MateriaModel from "../models/MateriaModel.js";

//** Metodos para el CRUD**//

//Mostrar todas las Materias
export const getAllMaterias = async (req, res) => {
    try {
        const materia = await MateriaModel.findAll({
            where: {cursoId: req.params.cursoId}
        })
        res.json(materia)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Mostrar una Materia
export const getMateria = async (req, res) => {
    try {
        const materia = await MateriaModel.findAll({
            where: { id: req.params.id }
        })
        res.json(materia[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Mostrar una Materia por nombre
export const getMateriaByNombre = async (req, res) => {
    try {
        const materia = await MateriaModel.findAll({
            where: { cursoId: req.params.cursoId, nombre: req.params.nombre }
        })
        res.json(materia[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Crear una Materia
/*
export const createMateria = async (req, res) => {
    try {
        await MateriaModel.create(req.body)
        res.json({
            "message":"¡Materia creada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
*/
export const createMateria = async (req, res) => {
    const { cursoId, nombre, profesor, dias } = req.body;
  
    try {
         // Convertir el array de horarios en un objeto
    const horariosObj = {};
    dias.forEach(([dia, horario]) => {
      horariosObj[dia] = horario;
    });

      // Creamos una nueva instancia de MateriaModel con los datos recibidos del frontend
      const nuevaMateria = await MateriaModel.create({
        cursoId,
        nombre,
        profesor,
        dias: horariosObj, // Guardar el objeto en lugar de la cadena JSON

      });
  
      res.status(201).json({
        message: "Materia creada exitosamente",
        data: nuevaMateria,
      });
    } catch (error) {
      console.error("Error al crear la materia:", error);
      res.status(500).json({ message: "Error al crear la materia" });
    }
  };

//Actualizar una Materia
export const updateMateria = async (req, res) => {
    try {
        await MateriaModel.update(req.body, {
        where: {id: req.params.id}
        })
        res.json({
            "message":"¡Materia actualizada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Eliminar una Materia
export const deleteMateria = async (req, res) => {
    try {
        await MateriaModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"¡Materia eliminada correctamente!"
        })
    } catch (error) {
        res.status(403)  
        res.json( {message: error.message})
    }
}