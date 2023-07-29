
import express from 'express'

import {  getDatos } from "../controllers/PlanillaPracticosController.js";

const router = express.Router()

router.get('/:materiaId/:alumnoId', getDatos)

export default router