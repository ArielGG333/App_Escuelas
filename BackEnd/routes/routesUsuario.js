import express from 'express'
import { CreateUsuario, getUsuario } from '../controllers/UsuarioController.js'

const router = express.Router()
router.post('/', getUsuario)
router.post('/registro', CreateUsuario)

export default router