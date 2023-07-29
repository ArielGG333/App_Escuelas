import express from 'express'
import { getAllExamen, getExamen, createExamen, updateExamen, deleteExamen } from '../controllers/ExamenController.js'

const router = express.Router()

router.get('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor/:alumnoId/:alumnoNom/:alumnoApe/:alumno_materiaId', getAllExamen)
router.get('/:id', getExamen)
router.post('/', createExamen)
router.put('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor/:alumnoId/:alumnoNom/:alumnoApe/:alumno_materiaId/:id', updateExamen)
router.delete('/:id', deleteExamen)

export default router