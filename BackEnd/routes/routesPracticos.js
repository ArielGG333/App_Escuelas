import express from 'express'
import { getAllPracticos, getPractico, createPractico, updatePractico, deletePractico } from '../controllers/PracticoController.js'

const router = express.Router()

router.get('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor/:alumnoId/:alumnoNom/:alumnoApe/:alumno_materiaId', getAllPracticos)
router.get('/:id', getPractico)
router.post('/', createPractico)
router.put('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor/:alumnoId/:alumnoNom/:alumnoApe/:alumno_materiaId/:id', updatePractico)
router.delete('/:id', deletePractico)

export default router
