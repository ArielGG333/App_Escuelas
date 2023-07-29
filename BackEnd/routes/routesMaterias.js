import express from 'express'
import {getAllMaterias, getMateria, createMateria, updateMateria, deleteMateria, getMateriaByNombre } from '../controllers/MateriaController.js'

const router = express.Router()

router.get('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio', getAllMaterias)
router.get('/:id', getMateria)
router.get('/materiaByNombre/:cursoId/:nombre', getMateriaByNombre)
router.post('/', createMateria)
router.put('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:id', updateMateria)
router.delete('/:id', deleteMateria)

export default router
