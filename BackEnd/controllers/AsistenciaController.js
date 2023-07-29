// importamos el Modelo
import AsistenciaModel from "../models/AsistenciaModel.js";

//** Metodos para el CRUD**//

//Mostrar todas las Asistencias
export const getAllAsistencias = async (req, res) => {
    try {
        const asistencia = await AsistenciaModel.findAll({
            where: { alumno_materiaId: req.params.alumno_materiaId }
        })
        res.json(asistencia)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Mostrar una Asistencia
export const getAsistencia = async (req, res) => {
    try {
        const asistencia = await AsistenciaModel.findAll({
            where: { id: req.params.id }
        })
        res.json(asistencia[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Crear una Asistencia
export const createAsistencia = async (req, res) => {
    try {
        await AsistenciaModel.create(req.body)
        res.json({
            "message":"¡Asistencia creada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Actualizar una Asistencia
export const updateAsistencia = async (req, res) => {
    try {
        await AsistenciaModel.update(req.body, {
        where: {id: req.params.id}
        })
        res.json({
            "message":"¡Asistencia actualizada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Eliminar una Asistencia
export const deleteAsistencia = async (req, res) => {
    try {
        await AsistenciaModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"¡Asistencia eliminada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}