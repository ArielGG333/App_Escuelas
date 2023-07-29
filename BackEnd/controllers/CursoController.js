// importamos el Modelo
import CursoModel from "../models/CursoModel.js";
//import CursosByEscuelaId  from '../models/ProceduresModel.js'
import { QueryTypes, Sequelize } from "sequelize";

//** Metodos para el CRUD**//

//Mostrar todos los Cursos
export const getAllCursos = async (req, res) => {
    try {
        const curso = await CursoModel.findAll({
            where: { escuelaId: req.params.escuelaId }
        })
        res.json(curso)
    } catch (error) {
        res.json( {message: error.message})
    }
}



/*
export const getCursosByEscuelaId = async (req, res) =>{
    const { escuelaId } = req.params;
    const {result} = await Sequelize.query(`${Sequelize.QueryTypes.call} cursos_por_escuela(: proc_escuelaId)`,{
        replacements: {proc_escuelaId: escuelaId},
        type: Sequelize.QueryTypes.SELECT
    });
    res.json(result);
};


export const getCursosByEscuelaId = async (req, res) => {
    try{
        const results = await Sequelize.query('CALL cursos_por_escuelas(:proc_escuelaId)', {
            replacement: {proc_escuelaId: escuelaId},
            type: QueryTypes.SELECT
        });
        console.log(results);
    } catch(error) {
        console.log(error);
    }
}

*/


//Mostrar un Curso
export const getCurso = async (req, res) => {
    try {
        const curso = await CursoModel.findAll({
            where: { id: req.params.id }
        })
        res.json(curso[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}



//Mostrar un Curso
export const getCheckCursoExists = async (req, res) => {
    try {
      
        const curso = await CursoModel.findAll({
            

            where: { 
                escuelaId: req.params.escuelaId, 
                anio: req.params.anio,  
                grado: req.params.grado, 
                division: req.params.division, 
                turno: req.params.turno
            }
        })
  
//        if (curso.length > 0) {
            res.json(curso[0]);
//          } else {
//            res.status(404).json({ message: "El curso no existe en esta Escuela" });
//          }
    } catch (error) {
//        res.status(500).json({ message: error.message });
console.error(error);
    res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
}







//Crear un Curso
export const createCurso = async (req, res) => {
    try {
        await CursoModel.create(req.body)
        res.json({
            "message":"¡Curso creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Actualizar un Curso
export const updateCurso = async (req, res) => {
    try {
        await CursoModel.update(req.body, {
        where: {id: req.params.id}
        })
        res.json({
            "message":"¡Curso actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Eliminar un Curso
export const deleteCurso = async (req, res) => {
    try {
        await CursoModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"¡Curso eliminado correctamente!"
        })
    } catch (error) {
        res.status(403)
        res.json( {message: error.message})
    }
}