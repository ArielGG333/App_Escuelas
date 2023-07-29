import express from 'express'
import { createAsistencia, deleteAsistencia, getAllAsistencias, getAsistencia, updateAsistencia } from '../controllers/AsistenciaController.js'

const router = express.Router()

router.get('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor/:alumnoId/:alumnoNom/:alumnoApe/:alumno_materiaId', getAllAsistencias)
router.get('/:id', getAsistencia)
router.post('/', createAsistencia)
router.put('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor/:alumnoId/:alumnoNom/:alumnoApe/:alumno_materiaId/:id', updateAsistencia)
router.delete('/:id', deleteAsistencia)

export default router
