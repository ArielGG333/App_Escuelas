import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";

const router = express.Router();

const app = express();
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Configurar el almacenamiento de archivos con Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Obtén la carpeta de destino según el usuario
    const usuarioId = req.params.usuarioId;
    // Crear la ruta de destino de la carpeta del usuario
    const folderPath = `../reactfront/public/uploadDocs/${usuarioId}`;
     // Crear automáticamente la carpeta si no existe
     if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  dest: (req, file, cb) => {
    // Obtén la carpeta de destino según el usuario
    const usuarioId = req.params.usuarioId;
    const folderPath = `../reactfront/public/uploadDocs/${usuarioId}`;
  },
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: El archivo debe ser  .pdf o .doc");
  },
});

// Configurar una ruta para servir archivos

// Configurar una ruta para cargar archivos
router.post(`/:usuarioId`, upload.single("file"), async (req, res) => {
  try {
    const usuarioId = req.params.usuarioId;
    const { filename, path } = req.file;

    if (res.error) {
      console.error("Error al leer los archivos:", err);
      res.status(500).json({ error: "Error al leer los archivos" });
    } else {
      res.send("Documento cargado correctamente");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al subir el archivo." });
  }
});
/*
router.get('/:fileName', (req, res) => {
  const folderPath = `../reactfront/public/uploadDocs/fileName`;
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error al leer los archivos:', err);
      res.status(500).json({ error: 'Error al leer los archivos' });
    } else {
      res.json({ files });
    }
  });
});
*/

//Eliminar un documento

router.delete("/:usuarioId/:fileName", (req, res) => {
  const usuarioId = req.params.usuarioId;
  const fileName = req.params.fileName;
  const rutaArchivo = `../reactfront/public/uploadDocs/${usuarioId}/${fileName}`;
  fs.unlink(rutaArchivo, (error) => {
    if (error) {
      console.error("Error al iminar el archivo:", error);
      res.status(500).send("Error al eliminar el archivo");
    } else {
      console.log("Archivo eliminado", fileName);

      res.status(200).send(" Archivo eliminado");
    }
  });
});

/*
router.get("/", (req, res)=>{
    res.send("todo bien");
} )
*/

export default router;
