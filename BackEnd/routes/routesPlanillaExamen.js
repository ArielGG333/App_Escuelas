
import express from 'express'

import {  getDatos } from "../controllers/PlanillaExamenController.js";

const router = express.Router()

router.get('/:materiaId/:alumnoId', getDatos)

export default router