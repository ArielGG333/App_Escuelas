import express from 'express'
import {getAllEscuelas, getEscuela, createEscuela, updateEscuela, deleteEscuela, getEscuelaByNombre } from '../controllers/EscuelaController.js'

const router = express.Router()

router.get('/:usuarioId', getAllEscuelas)
router.get('/:usuarioId/:id', getEscuela)
router.get('/escuelaByNombre/:usuarioId/:nombre', getEscuelaByNombre)
router.post('/', createEscuela);
router.put('/:id', updateEscuela)
router.delete('/:id', deleteEscuela)

export default router

