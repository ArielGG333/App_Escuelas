import express from 'express'
import { createCurso, deleteCurso, getCurso, updateCurso, getAllCursos, getCheckCursoExists } from '../controllers/CursoController.js'

const router = express.Router()

router.get('/:escuelaId/:escuela/:direccion/:telefono', getAllCursos)
router.get('/:id', getCurso)
router.get('/checkCursoExists/:escuelaId/:anio/:grado/:division/:turno', getCheckCursoExists)
router.post('/', createCurso)
router.put('/:escuelaId/:escuela/:direccion/:telefono/:id', updateCurso)
router.delete('/:id', deleteCurso)

export default router

