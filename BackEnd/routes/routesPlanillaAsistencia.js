
import express from 'express'

import {  getDatos } from "../controllers/PlanillaAsistenciasController.js";

const router = express.Router()

router.get('/:materiaId/:alumnoId', getDatos)

export default router