
import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express();

router.get(`/:usuarioId`, (req, res) => {
  const usuarioId = req.params.usuarioId;
  const folderPath = `../reactfront/public/uploadDocs/${usuarioId}`;
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer los archivos:', err);
      res.status(500).json({ error: 'Error al leer los archivos' });
    } else {
      res.json({ files });
    }
  });
});


//Eliminar una Escuela
/*
router.delete('/:fileName', (req, res) => {

  const folderPath = '../reactfront/public/uploadDocs';
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer los archivos:', err);
      res.status(500).json({ error: 'Error al leer los archivos' });
    } else {
      res.json({ files });
    }
  })
})
*/
export default router
