// importamos el Modelo
import AlumnoModel from "../models/AlumnoModel.js";
import MateriaModel from "../models/MateriaModel.js";
import AlumnoMateriaModel from "../models/AlumnoMateriaModel.js";
import { Sequelize } from "sequelize";

//** Metodos para el CRUD**//

//Mostrar todos los Alumnos
export const getAllAlumnos = async (req, res) => {
  const { materiaId } = req.params;
  try {
    const alumno = await MateriaModel.sequelize.query(
      "CALL obtenerAlumnos(:materiaId)",
      {
        replacements: { materiaId },
        type: Sequelize.QueryTypes.SELLECT,
      }
    );
    res.json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los alumnos" });
  }
};

/*
export const getAllAlumnos = async (req, res) => {
    try {
        const alumno = await AlumnoModel.findAll({
            where: {materiaId: req.params.materiaId}
        })
        res.json(alumno)
    } catch (error) {
        res.json( {message: error.message})
    }
}
*/

//Mostrar un Alumno
export const getAlumno = async (req, res) => {
  try {
    const alumno = await AlumnoModel.findAll({
      where: { id: req.params.id },
    });
    res.json(alumno[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un Alumno por dni
export const getAlumnoByDni = async (req, res) => {

  try {
    const alumno = await AlumnoModel.findAll({

      where: { dni: req.params.dni },
    });

//    res.json({ existe: alumno !== null });
    res.json(alumno[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al verificar el DNI' });
  }
};

//Crear un Alumno llamando al stored procedure, utilizando sequelize.query
export const createAlumno = async (req, res) => {
  /*
  try {
    await AlumnoModel.create(req.body);

    res.json({
      message: "¡Alumno creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
}
*/

  try {
    const { nombre, apellido, dni, observaciones } = req.body;
    // Llamar al stored procedure utilizando sequelize.query
    const alumno = await AlumnoModel.sequelize.query(
      "CALL crearAlumno1(:nombre, :apellido, :dni, :observaciones, @idGenerado )",
      {
        replacements: { nombre, apellido, dni, observaciones },
        type: Sequelize.QueryTypes.RAW,
        raw: true,
        mapToModel: false, // Deshabilita el mapeo a modelos para obtener resultados más sencillos
      }
    );
    // Obtener el valor del parámetro de salida (idGenerado)
    const idGenerado = await AlumnoModel.sequelize.query("SELECT @idGenerado", {
      type: Sequelize.QueryTypes.SELECT,
      raw: true,
    });

    // Aquí puedes hacer algo con el resultado y el valor de idGenerado, como enviarlos en la respuesta
    res.json({ alumno, idGenerado });
    console.log(idGenerado);
    // res.json(alumno);
  } catch (error) {
    console.error("Error al llamar al stored procedure:", error);
    res.status(500).json({ error: "Error al llamar al stored procedure" });
  }
};

export const createRelacionAlumnoMateria = async (req, res) => {
  try {
    await AlumnoMateriaModel.create(req.body);
    console.log(alumnoId);
    console.log(materiaId);
    res.json({
      message: "¡Relacion Alumno-materia creada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un Alumno
export const updateAlumno = async (req, res) => {
  try {
    await AlumnoModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Alumno actualizado correctamente!",
    });
  } catch (error) {
    res.status(403);
    res.json({ message: error.message });
  }
};

//Eliminar un Alumno
// export const deleteAlumno = async (req, res) => {
export const getIdRelacionAlumnoMateria = async (req, res) => {
  // Obtenego el id de la relacion
  try {
    const relacion = await AlumnoMateriaModel.findAll({
      where: {
        alumnoId: req.params.alumnoId,
        materiaId: req.params.materiaId,
      },
      attributes: ["id"],
    });
    res.json({
      relacion,
    });
    const relacionId = relacion ? relacion.id : null;
   // const otra = relacion.id[0];
   // console.log(otra);
  } catch (error) {
    res.status(403);
    // res.json({ message: error.message });
  }
};
// Elimino la relacion

export const deleteRelacionAlumnoMateria = async (req, res) => {
  try {
    await AlumnoMateriaModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Relacion alumno-materia eliminada correctamente!",
    });
  } catch (error) {
    res.status(403);
    res.json({
      message: "ERROR: alumno-materia no se  elimino correctamente!",
    });
  }
};
// Elimino el alumno
export const deleteAlumno = async (req, res) => {
  try {
    await AlumnoModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Alumno eliminado correctamente!",
    });
  } catch (error) {
    res.status(403);
    res.json({ message: error.message });
  }
};
/*
 // Elimino la relacion
    try {
        await AlumnoMateriaModel.destroy({
          where: { id: relacionId }
        });
        res.json({
          message: "¡Relacion alumno-materia eliminada correctamente!",
        });
      } catch (error) {
        res.status(403);
        res.json({ message:"ERROR: alumno-materia no se  elimino correctamente!" });
      }

// Elimino el alumno
     try {
    await AlumnoModel.destroy({
      where: { id: req.params.alumnoId },
    });
    res.json({
      message: "¡Alumno eliminado correctamente!",
    });
  } catch (error) {
    res.status(403);
    res.json({ message: error.message });
  }

*/
