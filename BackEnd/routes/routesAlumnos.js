import express from 'express'
import { getAllAlumnos, getAlumno, createAlumno, createRelacionAlumnoMateria, updateAlumno, deleteAlumno, getIdRelacionAlumnoMateria, deleteRelacionAlumnoMateria, getAlumnoByDni} from '../controllers/AlumnoController.js'

const router = express.Router()

router.get('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor', getAllAlumnos)
router.get('/:id', getAlumno)
router.get('/alumnoByDni/:dni', getAlumnoByDni)

router.post('/', createAlumno)
//router.post('/:nombre/:apellido/:dni/:observaciones', createRelacionAlumnoMateria)
router.post('/alumnos_materias', createRelacionAlumnoMateria)
router.put('/:escuelaId/:escuela/:direccion/:telefono/:cursoId/:grado/:division/:turno/:anio/:materiaId/:materia/:profesor/:id', updateAlumno)
router.get('/alumnos_materias/:alumnoId/:materiaId', getIdRelacionAlumnoMateria)

router.delete('/alumnos_materias/:id', deleteRelacionAlumnoMateria)

router.delete('/:id', deleteAlumno)

export default router
